'use client'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

import { UserLikeContext, userLikeDto } from '@/app/provider/UserLikeProvider'

import style from '@/app/my/reservations/reservations.module.scss'

export default function LikeList() {
    const [fetchLikeList, setFetchLikeList] = useState([])
    const userLikeList = useContext(UserLikeContext)
    const getItem = async (like: userLikeDto) => {
        const res = await fetch(`/api/room/detail/${like.accommodationId}`)
        const data = await res.json()
        setFetchLikeList((prevFetchLikeList) => [
            ...prevFetchLikeList,
            data.data,
        ])
    }

    useEffect(() => {
        userLikeList.map((like) => {
            getItem(like)
        })
    }, [])

    return (
        <>
            {fetchLikeList.map((room, index) => {
                return (
                    <li key={index} className={style.reservationDetail}>
                        <Link
                            href={`/room/detail/${room.accommodationId}`}
                            className={style.item}>
                            <span className={style.itemImg}>
                                <img
                                    className={`${style.itemImgBook}`}
                                    src={room.imgUrl}
                                    alt={room.alt}
                                />
                            </span>
                            <strong className={style.itemName}>
                                {room.accommodationName}
                            </strong>
                        </Link>
                    </li>
                )
            })}
        </>
    )
}
