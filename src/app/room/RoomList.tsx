'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import ButtonLike from '@/app/components/btns/ButtonLike'
import style from '@/app/room/room.module.scss'
import { getRoomList } from '@/app/api/getFireBaseData'
import { RoomListContext } from '@/app/provider/roomListProvider'

const RoomList = () => {
    const { fetchRoomList, setFetchRoomList } = useContext(RoomListContext)
    const [like, setLike] = useState({})

    const observerRef = useRef(null)
    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                observerRef.current.innerText += '관측되었습니다'

                const reFetchData = async () => {
                    const data = await getRoomList()
                    setFetchRoomList((prev) => [...prev, ...data])
                }
                reFetchData()
            } else {
                console.log('벗어났씁니다.')
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getRoomList()
            setFetchRoomList(data)
        }
        fetchData()
        const observer = new IntersectionObserver(callback, {
            threshold: 1,
        })
        observer.observe(observerRef.current)
        return () => observer && observer.disconnect()
    }, [])

    const handleLike = (id) => {
        setLike((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    return (
        <ul className={style.roomList}>
            {fetchRoomList.map((room, index) => {
                return (
                    <li key={index} className={style.roomListItem}>
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
            <li ref={observerRef}></li>
        </ul>
    )
}

export default RoomList
