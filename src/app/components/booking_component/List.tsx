'use client'
import React, { useEffect, useState, useContext } from 'react'
import style from '@/app/my/reservations/reservations.module.scss'
import { IsLoginContext } from '@/app/provider/IsLoginProvider'

export default function List() {
    const { userInfo } = useContext(IsLoginContext)
    const [fetchReserveList, setFetchReserveList] = useState([])
    const userId = userInfo.userId
    useEffect(() => {
        onCheckReserve()
    }, [])

    const userId = userInfo.userId

    const onCheckReserve = async () => {
        const res = await fetch(`/api/reserve/checkReserve/${userId}`)
        const data = await res.json()
        setFetchReserveList(data.data)
        console.log(data)
    }
    const onClickDeleteReserve = async (reserveId) => {
        const res = await fetch(`/api/reserve/deleteReserve/${reserveId}`, {
            method: 'DELETE',
        })
        const data = await res.json()
        console.log(data)
    }

    function formatDate(startDate, endDate) {
        const start = new Date(startDate)
        const end = new Date(endDate)
        const startDayOfMonth = start.getDate() // 시작 날짜 일
        const endDayOfMonth = end.getDate() // 끝 날짜 일
        const startMonth = start.getMonth() + 1 // 시작 월 (0부터 시작하므로 +1 해줍니다)
        const endMonth = end.getMonth() + 1 // 끝 월 (0부터 시작하므로 +1 해줍니다)
        const startDayOfWeek = start.toLocaleDateString('ko-KR', {
            weekday: 'short',
        }) // 시작 요일
        const endDayOfWeek = end.toLocaleDateString('ko-KR', {
            weekday: 'short',
        }) // 끝 요일

        const nightCount = Math.floor(
            (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
        ) // 박수 계산

        return `${startMonth}.${startDayOfMonth} ${startDayOfWeek} - ${endMonth}.${endDayOfMonth} ${endDayOfWeek} • ${nightCount}박`
    }
    //출력 예시 ' 02.25 토 - 02.26 일 • 1박'

    return (
        <>
            {fetchReserveList.map((room, index) => {
                return (
                    <li key={index}>
                        <div className={style.reservationDetail}>
                            <button
                                onClick={() => {
                                    onClickDeleteReserve(room.reserveId)
                                }}
                                type="button"
                                className={style.buttonDelete}>
                                삭제
                            </button>
                            <p className={style.pic}>
                                <img
                                    className={style.imageBook}
                                    src={
                                        'https://image.goodchoice.kr/resize_490x348/affiliate/2019/08/20/5d5b53a26dbdb.jpg'
                                    }
                                    alt=""
                                    //api 이미지 프로퍼티필요
                                />
                            </p>
                            <a className={style.productTitle}>
                                <i className={style.productStateBook}>
                                    예약확정
                                </i>
                                <strong className={style.roomName}>
                                    {room.accommodationId}
                                    {/*   api 숙소이름 프로퍼티필요   */}
                                </strong>
                                <span className={style.roomDate}>
                                    {formatDate(room.reserveDate, room.endDate)}
                                </span>
                            </a>
                        </div>
                    </li>
                )
            })}
        </>
    )
}
