'use client'
import React, { useContext, useEffect, useState } from 'react'
import style from '@/app/room/room.module.scss'
import ButtonDefault from '@/app/components/btns/ButtonDefault'
import RoomDetailSlide from '@/app/room/RoomDetailSlide'
import ButtonLike from '@/app/components/btns/ButtonLike'
import { IsLoginContext } from '@/app/provider/IsLoginProvider'
import { RoomListContext } from '@/app/provider/roomListProvider'

interface RoomDetail {
    accommodationName: string
    region: string | undefined
    price: number | undefined
    infoOpt: string | undefined
    introduce: string | undefined
    soldOut: boolean
}

const RoomDetailPage = async (props) => {
    const { userInfo } = useContext(IsLoginContext)
    const { fetchRoomList } = useContext(RoomListContext)
    const [roomDetail, setRoomDetail] = useState<RoomDetail>({
        accommodationName: '',
        region: undefined,
        price: undefined,
        infoOpt: undefined,
        introduce: undefined,
        soldOut: false,
    })

    const params = props.params.id

    const onClickAddReserve = async () => {
        const requestBody = {
            reserveId: 0, // 또는 원하는 값을 설정하세요
            userId: userInfo.userId, // 예시로 1을 설정했습니다
            accommodationId: fetchRoomList.accommodationId, // 예시로 1을 설정했습니다
        }

        // 데이터를 JSON 문자열로 변환

        const res = await fetch('/api/reserve/addReserve', {
            method: 'POST',
            body: JSON.stringify(requestBody), // FormData 객체를 요청 본문으로 사용
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
