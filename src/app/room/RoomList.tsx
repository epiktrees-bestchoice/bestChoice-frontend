'use client'
import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import ButtonLike from '@/app/components/btns/ButtonLike'
import style from '@/app/room/room.module.scss'
import { getRoomList } from '@/app/api/getFireBaseData'

const RoomList = ({ fetchRoomList }) => {
    const [like, setLike] = useState({})
    const handleLike = (id) => {
        setLike((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }
    return (
        <ul className={style.roomList}>
            {fetchRoomList.map((room) => {
                return (
                    <li key={room.id} className={style.roomListItem}>
                        <Link href={`/room/detail/${room.id}`}>
                            {/* 테스트용 삭제 예정 20230920 by jyj */}
                            {/* <span>{room.detailOpt}</span> */}
                            <span className={style.boxImg}>
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
                        <ButtonLike
                            className={`m16`}
                            onClick={() => handleLike(room.id)}
                            Liked={like[room.id]}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

export default RoomList
