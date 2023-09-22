import React from 'react'
import style from '@/app/my/reservations/reservations.module.scss'

export default function LikeList() {
    const List = [
        {
            id: '1',
            img: 'https://image.goodchoice.kr/resize_531x276/adimg_new/50188/138814/04b0e90d9c17ef6f564a0041cf6165fe.jpg',
            alt: '경포대',

            roomName: '경포대 아테네',
        },
        {
            id: '2',
            img: 'https://image.goodchoice.kr/resize_531x276/adimg_new/50188/138814/04b0e90d9c17ef6f564a0041cf6165fe.jpg',
            alt: '강남',

            roomName: '강남 파라다이스',
        },
        {
            id: '3',
            img: 'https://image.goodchoice.kr/resize_531x276/adimg_new/50188/138814/04b0e90d9c17ef6f564a0041cf6165fe.jpg',
            alt: '부산',

            roomName: '부산 마린시티',
        },
    ]

    return (
        <>
            {List.map((room) => {
                return (
                    <li key={room.id}>
                        <div className={style.reservationDetail}>
                            <p className={style.pic}>
                                <img
                                    className={style.imageBook}
                                    src={room.img}
                                    alt={room.alt}
                                />
                            </p>
                            <a className={style.productTitle}>
                                <strong className={style.roomName}>
                                    {room.roomName}
                                </strong>
                                <span className={style.roomDate}></span>
                            </a>
                        </div>
                    </li>
                )
            })}
        </>
    )
}
