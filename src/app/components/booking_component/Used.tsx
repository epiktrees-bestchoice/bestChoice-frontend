import React from 'react'
import style from '@/app/my/reservations/reservations.module.scss'

export default function Used() {
    const usedList = [
        {
            id: '1',
            img: 'https://image.goodchoice.kr/resize_531x276/adimg_new/50188/138814/04b0e90d9c17ef6f564a0041cf6165fe.jpg',
            alt: '경포대',

            roomName: '경포대 아테네',
            date: ' 02.25 토 - 02.26 일 • 1박',
        },
        {
            id: '2',
            img: 'https://image.goodchoice.kr/resize_531x276/adimg_new/50188/138814/04b0e90d9c17ef6f564a0041cf6165fe.jpg',
            alt: '강남',

            roomName: '강남 파라다이스',
            date: ' 03.16 수 - 03.18 금 • 2박',
        },
        {
            id: '3',
            img: 'https://image.goodchoice.kr/resize_531x276/adimg_new/50188/138814/04b0e90d9c17ef6f564a0041cf6165fe.jpg',
            alt: '부산',

            roomName: '부산 마린시티',
            date: ' 07.02 일 - 07.05 수 • 3박',
        },
    ]

    return (
        <>
            {usedList.map((room) => {
                return (
                    <li key={room.id}>
                        <div className={style.reservationDetail}>
                            <button
                                type="button"
                                className={style.buttonDelete}>
                                삭제
                            </button>
                            <p className={style.pic}>
                                <img
                                    className={style.image}
                                    src={room.img}
                                    alt={room.alt}
                                />
                            </p>
                            <a className={style.productTitle}>
                                <i className={style.productState}>이용완료</i>
                                <strong className={style.roomName}>
                                    {room.roomName}
                                </strong>
                                <span className={style.roomDate}>
                                    {room.date}
                                </span>
                            </a>
                            <p className={style.rebookButton}>
                                <a className={style.rebookText}>다시예약</a>
                            </p>
                        </div>
                    </li>
                )
            })}
        </>
    )
}
