import React from 'react'

import style from '@/app/room/room.module.scss'
import Link from 'next/link'

const RoomList = () => {
    const RoomLists = [
        // path 수정 필요 - 20230825 by oliv (수정 완료시 주석 삭제)
        {
            id: '1',
            name: '명동 밀리오레호텔',
            img: '../img/roomList1.jpg',
            score: '8.9',
            scoreTxt: '만족해요',
            infoAddr: '중구 충무로1가',
            infoOpt: '예약취소가능',
            infoEvt: '무료주차,넷플릭스 고객 개인 계정 로그인 필수',
            rentHalf: '대실',
            rentHalfPrice: '35,000',
            rentAll: '숙박',
            rentAllPrice: '80,000',
            rentBedge: '예약특가',
        },
        {
            id: '2',
            name: '공덕 밀리오레호텔',
            img: '../img/roomList1.jpg',
            score: '8.9',
            scoreTxt: '만족해요',
            infoAddr: '중구 충무로1가',
            infoOpt: '예약취소가능',
            infoEvt: '무료주차,넷플릭스 고객 개인 계정 로그인 필수',
            rentHalf: '대실',
            rentHalfPrice: '35,000',
            rentAll: '숙박',
            rentAllPrice: '80,000',
            rentBedge: '예약특가',
        },
        {
            id: '3',
            name: '공덕 밀리오레호텔',
            img: '../img/roomList1.jpg',
            score: '8.9',
            scoreTxt: '만족해요',
            infoAddr: '중구 충무로1가',
            infoOpt: '예약취소가능',
            infoEvt: '무료주차,넷플릭스 고객 개인 계정 로그인 필수',
            rentHalf: '대실',
            rentHalfPrice: '35,000',
            rentAll: '숙박',
            rentAllPrice: '80,000',
            rentBedge: '예약특가',
        },
    ]
    return (
        <ul className={style.roomList}>
            {RoomLists.map((room) => {
                return (
                    <li key={room.id} className={style.roomListItem}>
                        <Link href={`/room/detail/${room.id}`}>
                            <span className={style.boxImg}>
                                {/* 이미지 스타일 수정 필요 - 20230902 by jyj */}
                                <img src={room.img} alt="" />
                            </span>
                            <span className={style.boxTxt}>
                                <span className={style.info}>
                                    <strong className={style.infoTit}>
                                        {room.name}
                                    </strong>
                                    <span className={style.infoScore}>
                                        <span>
                                            <em>{room.score}</em>&nbsp;
                                            {room.scoreTxt}
                                        </span>
                                        &nbsp;(3611)
                                    </span>
                                    <span className={style.infoAddr}>
                                        {room.infoAddr}
                                    </span>
                                    <span className={style.infoOpt}>
                                        {room.infoOpt}
                                    </span>
                                    <span className={style.infoEvt}>
                                        {room.infoEvt}
                                    </span>
                                </span>
                                <span className={style.price}>
                                    <span className={style.priceDetail}>
                                        {room.rentHalf}&nbsp;
                                        <span className={style.bold}>
                                            {room.rentHalfPrice}원
                                        </span>
                                    </span>
                                    <span className={style.priceDetail}>
                                        {room.rentAll}&nbsp;
                                        <span className={style.badge}>
                                            {room.rentBedge}
                                        </span>
                                        &nbsp;
                                        <span
                                            className={`${style.bold} ${style.pink}`}>
                                            {room.rentAllPrice}원
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default RoomList
