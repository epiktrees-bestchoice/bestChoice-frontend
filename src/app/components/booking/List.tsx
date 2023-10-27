'use client'
import React, { useEffect, useState, useContext } from 'react'
import style from '@/app/my/reservations/reservations.module.scss'
import { IsLoginContext } from '@/app/provider/IsLoginProvider'
import Link from 'next/link'
import { RevervationContext } from '@/app/provider/reservationProvider'

export default function List() {
    const { userInfo } = useContext(IsLoginContext)
    const { reservationList, dispatch } = useContext(RevervationContext)
    const [fetchReserveList, setFetchReserveList] = useState([])
    const userId = userInfo.userId
    useEffect(() => {
        reservationList.map((reservation) => {
            fetctReservationDetail(reservation)
        })
    }, [reservationList])

    // fetch 나의 예약 리스트
    const fetctReservationDetail = async (reservation) => {
        const res = await fetch(
            `/api/room/detail/${reservation.accommodationId}`,
        )
        const data = await res.json()
        const totalList = Object.assign(reservation, data.data)
        setFetchReserveList((prev) => [...prev, totalList])
    }

    // delete 나의 예약 리스트
    const onClickDeleteReserve = async (reserveId) => {
        const res = await fetch(`/api/reserve/deleteReserve/${reserveId}`, {
            method: 'DELETE',
        })
        const data = await res.json()
        dispatch({
            type: 'RemoveReservation',
            reserveId: reserveId,
        })
        setFetchReserveList([])
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
                    <li key={index} className={style.reservationDetail}>
                        <button
                            onClick={() => {
                                onClickDeleteReserve(room.reserveId)
                            }}
                            type="button"
                            className={style.buttonDelete}>
                            <span className="blind">삭제</span>
                        </button>
                        <Link
                            href={`/room/detail/${room.accommodationId}`}
                            className={style.item}>
                            <span className={style.itemImg}>
                                <img
                                    className={style.itemImgBook}
                                    src={`${room.imgUrl}`}
                                    alt=""
                                />
                            </span>
                            <span className={style.itemName}>
                                <i className={style.productStateBook}>
                                    예약확정
                                </i>
                                <span className={style.itemName}>
                                    {room.accommodationName}
                                </span>
                                <span className={style.roomDate}>
                                    {formatDate(room.reserveDate, room.endDate)}
                                </span>
                            </span>
                        </Link>
                    </li>
                )
            })}
        </>
    )
}
