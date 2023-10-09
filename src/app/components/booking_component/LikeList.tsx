'use client'
import React, { useContext, useEffect, useState } from 'react'
import style from '@/app/my/reservations/reservations.module.scss'

import { UserLikeContext, userLikeDto } from '@/app/provider/UserLikeProvider'

export default function LikeList() {
    const [fetchLikeList, setFetchLikeList] = useState([])
    const userLikeList = useContext(UserLikeContext)
    console.log(fetchLikeList)
    const getItem = async (like: userLikeDto) => {
        const res = await fetch(`/api/room/detail/${like.accommodationId}`)
        const data = await res.json()
        setFetchLikeList((prevFetchLikeList) => [
            ...prevFetchLikeList,
            data.data,
        ])
    }

    useEffect(() => {
        //onCheckLike()
        userLikeList.map((like) => {
            getItem(like)
        })
    }, [])
    // console.log('공유 좋아요 리스트')
    // console.log(userLikeList)
    // const onCheckLike = async () => {
    //     const res = await fetch(`/api/like/checkLike?userId=${userInfo.userId}`)
    //     const data = await res.json()
    //     setFetchLikeList(data.data)
    //     console.log(data)
    // }

    return (
        <>
            {fetchLikeList.map((room, index) => {
                // api구조 완성하면 마저 끝낼것
                console.log(room)
                return (
                    <li key={index}>
                        <div className={style.reservationDetail}>
                            <p className={style.pic}>
                                <img
                                    className={`${style.imageBook}`}
                                    src={room.imgUrl}
                                    alt={room.alt}
                                />
                            </p>
                            <a className={style.productTitle}>
                                <strong className={style.roomName}>
                                    {room.accommodationName}
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
