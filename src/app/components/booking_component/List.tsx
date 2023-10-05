'use client'
import React, { useEffect, useState } from 'react'
import style from '@/app/my/reservations/reservations.module.scss'

export default function List() {
    const [fetchReserveList, setFetchReserveList] = useState([])
    useEffect(() => {
        onCheckReserve()
    }, [])

    const onCheckReserve = async () => {
        const res = await fetch('/api/reserve/checkReserve')
        const data = await res.json()
        setFetchReserveList(data.data)
        console.log(data)
    }

    // const usedList = [
    //     {
    //         id: '1',
    //         img: 'https://image.goodchoice.kr/resize_531x276/adimg_new/50188/138814/04b0e90d9c17ef6f564a0041cf6165fe.jpg',
    //         alt: '경포대',
    //         isUsed: true,
    //         roomName: '경포대 아테네',
    //         date: ' 02.25 토 - 02.26 일 • 1박',
    //     },
    //     {
    //         id: '2',
    //         img: 'https://image.goodchoice.kr/resize_531x276/adimg_new/50188/138814/04b0e90d9c17ef6f564a0041cf6165fe.jpg',
    //         alt: '강남',
    //         isUsed: false,
    //         roomName: '강남 파라다이스',
    //         date: '체크인: 03.16 수 - 03.18 금 • 2박',
    //     },
    //     {
    //         id: '3',
    //         img: 'https://image.goodchoice.kr/resize_531x276/adimg_new/50188/138814/04b0e90d9c17ef6f564a0041cf6165fe.jpg',
    //         alt: '부산',
    //         isUsed: true,
    //         roomName: '부산 마린시티',
    //         date: ' 07.02 일 - 07.05 수 • 3박',
    //     },
    // ]

    return (
        <>
            {fetchReserveList.map((room, index) => {
                return (
                    <li key={index}>
                        <div className={style.reservationDetail}>
                            <button
                                onClick={() => {}}
                                type="button"
                                className={style.buttonDelete}>
                                삭제
                            </button>
                            <p className={style.pic}>
                                <img
                                    className={style.imageBook}
                                    src={room.img}
                                    alt={room.alt}
                                />
                            </p>
                            <a className={style.productTitle}>
                                <i className={style.productStateBook}>
                                    예약확정
                                </i>
                                <strong className={style.roomName}>
                                    {room.accommodationName}
                                </strong>
                                <span className={style.roomDate}>
                                    {room.reserveDate} • {room.stayDay} 박
                                </span>
                            </a>
                        </div>
                    </li>
                )
            })}
        </>
    )
}
