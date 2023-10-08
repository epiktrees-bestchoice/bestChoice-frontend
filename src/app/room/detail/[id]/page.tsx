'use client'
import React, { useContext, useEffect, useState } from 'react'
import style from '@/app/room/room.module.scss'
import ButtonDefault from '@/app/components/btns/ButtonDefault'
import RoomDetailSlide from '@/app/room/(roomComponent)/RoomDetailSlide'
import ButtonLike from '@/app/components/btns/ButtonLike'
import { IsLoginContext } from '@/app/provider/IsLoginProvider'

interface RoomDetail {
    accommodationName: string
    region: string | undefined
    price: number | undefined
    infoOpt: string | undefined
    introduce: string | undefined
    soldOut: boolean
    accommodationId: number
}

const RoomDetailPage = async (props) => {
    const { userInfo } = useContext(IsLoginContext)

    const [roomDetail, setRoomDetail] = useState<RoomDetail>({
        accommodationName: '',
        region: undefined,
        price: undefined,
        infoOpt: undefined,
        introduce: undefined,
        soldOut: false,
        accommodationId: 0,
    })

    const params = props.params.id

    const onClickAddReserve = async () => {
        const requestBody = {
            userId: userInfo.userId,
            accommodationId: roomDetail.accommodationId,
            reserveDate: '2023-10-10T00:57:19.571Z',
            endDate: '2023-10-14T00:57:19.571Z',
        }
        const res = await fetch('/api/reserve/addReserve', {
            method: 'POST',

            body: JSON.stringify(requestBody),
        })
        const data = await res.json()
        console.log(data)
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
