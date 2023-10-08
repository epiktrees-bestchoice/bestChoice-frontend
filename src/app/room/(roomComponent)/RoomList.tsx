'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import ButtonLike from '@/app/components/btns/ButtonLike'
import style from '@/app/room/room.module.scss'
import { RoomListContext } from '@/app/provider/roomListProvider'

import { IsLoginContext } from '@/app/provider/IsLoginProvider'
// 수정 필요 20230926 BY joj
import { useParams } from 'next/navigation'

const RoomList = () => {
    const params = useParams()
    const { fetchRoomList, setFetchRoomList } = useContext(RoomListContext)
    const [like, setLike] = useState({})
    const { userInfo } = useContext(IsLoginContext)

    // 수정 필요 20230926 BY joj
    const observerRef = useRef(null)
    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const reFetchData = async () => {
                    const res = await fetch(`/api/room/${params.id}`, {
                        method: 'GET',
                    })
                    const data = await res.json()
                    setFetchRoomList((prev) => [...prev, ...data.data])
                }
                reFetchData()
            }
        })
    }
    useEffect(() => {
        const observer = new IntersectionObserver(callback, {
            threshold: 1,
        })
        observer.observe(observerRef.current)
        return () => observer && observer.disconnect()
    }, [])

    const postLike = async (accommodationId) => {
        const requestBody = {
            userLikeId: 0,
            userId: userInfo.userId,
            accommodationId: accommodationId,
        }

        const res = await fetch('/api/like/addLike', {
            method: 'POST',
            body: JSON.stringify(requestBody),
        })
        const data = await res.json()
        console.log(data)
    }

    const deleteLike = async () => {
        const res = await fetch('/api/like/deleteLike', {
            method: 'DELETE',
        })
        const data = await res.json()
        console.log(data)
    }

    return (
        <ul className={style.roomList}>
            {fetchRoomList &&
                fetchRoomList.map((room, index) => {
                    return (
                        <li key={index} className={style.roomListItem}>
                            <Link href={`/room/detail/${room.accommodationId}`}>
                                {/* 테스트용 삭제 예정 20230920 by jyj */}
                                {/* <span>{room.detailOpt}</span> */}
                                <span className={style.boxImg}>
                                    <img
                                        src={room.imgUrl}
                                        alt=""
                                        loading="lazy"
                                    />
                                </span>

                                <span className={style.boxTxt}>
                                    <span className={style.info}>
                                        <strong className={style.infoTit}>
                                            {room.accommodationName}
                                        </strong>
                                        <span className={style.infoScore}>
                                            <span>
                                                {/* <em>{room.score}</em>&nbsp; */}
                                                {/* {room.scoreTxt} */}
                                                만족해요
                                            </span>
                                            &nbsp;(3663)
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
                                        {room.rentHalf && (
                                            <span className={style.priceDetail}>
                                                {room.rentHalf}&nbsp;
                                                <span className={style.bold}>
                                                    {room.rentHalfPrice}원
                                                </span>
                                            </span>
                                        )}

                                        <span className={style.priceDetail}>
                                            {room.rentAll}&nbsp;
                                            <span className={style.badge}>
                                                {/* {room.rentBedge} */}
                                                할인중
                                            </span>
                                            &nbsp;
                                            <span
                                                className={`${style.bold} ${style.pink}`}>
                                                {room.price}원
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </Link>
                            <ButtonLike className={`m16`} />
                        </li>
                    )
                })}

            <li ref={observerRef}></li>
        </ul>
    )
}

export default RoomList
