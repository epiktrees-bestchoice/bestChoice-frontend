'use client'
import React, { use, useEffect, useState } from 'react'
import style from '@/app/room/room.module.scss'
import ButtonDefault from '@/app/components/btns/ButtonDefault'
import RoomDetailSlide from '@/app/room/(roomComponent)/RoomDetailSlide'
import ButtonLike from '@/app/components/btns/ButtonLike'

interface RoomDetail {
    accommodationName: string
    region: string | null
    price: number | null
    infoOpt: string | null
    introduce: string | null
    soldOut: boolean
}

const RoomDetailPage = (props) => {
    const [roomDetail, setRoomDetail] = useState<RoomDetail>({
        accommodationName: '',
        region: null,
        price: null,
        infoOpt: null,
        introduce: null,
        soldOut: false,
    })
    const params = props.params.id

    const onClickAddReserve = async () => {
        const res = await fetch('/api/reserve/addReserve', {
            method: 'POST',
        })
        console.log(res)
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/room/detail/${params}`, {
                method: 'GET',
            })
            const data = await res.json()
            setRoomDetail(data.data)
        }
        fetchData()
    }, [])

    return (
        <div className="content">
            <div className={`inner ${style.room}`}>
                <div className={style.roomDetail}>
                    <div className={style.boxImg}>
                        <RoomDetailSlide roomDetail={roomDetail} />
                    </div>
                    <div className={style.boxTxt}>
                        {roomDetail?.region && (
                            <span className={style.infoAddr}>
                                {roomDetail.region}
                            </span>
                        )}
                        <strong className={style.tit}>
                            {roomDetail?.accommodationName}
                        </strong>
                        <span className={style.info}>
                            {roomDetail?.price && (
                                <span className={style.infoScore}>
                                    {/* <em>{roomDetail.score}&nbsp;</em> 
                                    {roomDetail.scoreTxt}
                                    */}
                                    <em>할인 특가</em>
                                    {roomDetail.price}원
                                </span>
                            )}
                            {roomDetail?.infoOpt && (
                                <span className={style.infoOpt}>
                                    {roomDetail.infoOpt}
                                </span>
                            )}
                            {roomDetail?.introduce && (
                                <span className={style.infoEvt}>
                                    {roomDetail.introduce}
                                </span>
                            )}
                            {roomDetail?.introduce && (
                                <span className={style.infoCeo}>
                                    <strong>사장님 한마디</strong>
                                    <span className={style.clamp}>
                                        {roomDetail.introduce}
                                    </span>
                                </span>
                            )}
                        </span>
                        <span className={style.btn}>
                            {roomDetail?.soldOut ? (
                                <ButtonDefault type="button" disable={true}>
                                    예약 마감
                                </ButtonDefault>
                            ) : (
                                <ButtonDefault
                                    type="button"
                                    disable={false}
                                    onClick={onClickAddReserve}>
                                    숙소 예약
                                </ButtonDefault>
                            )}
                        </span>
                    </div>
                    <ButtonLike />
                </div>
            </div>
        </div>
    )
}

export default RoomDetailPage
