import React from 'react'
import style from '@/app/room/room.module.scss'
import ButtonDefault from '@/app/components/btns/ButtonDefault'
import RoomDetailSlide from '@/app/room/RoomDetailSlide'
import ButtonLike from '@/app/components/btns/ButtonLike'
import { getRoomDetail } from '@/app/api/getFireBaseData'

const RoomDetailPage = async (props) => {
    const params = props.params.id
    const roomDetail = await getRoomDetail(params)

    return (
        <div className="content">
            <div className={`inner ${style.room}`}>
                <div className={style.roomDetail}>
                    <div className={style.boxImg}>
                        <RoomDetailSlide />
                    </div>
                    <div className={style.boxTxt}>
                        <strong className={style.tit}>{roomDetail.name}</strong>
                        <span className={style.info}>
                            {roomDetail.scoreTxt && (
                                <span className={style.infoScore}>
                                    {roomDetail.score && (
                                        <em>{roomDetail.score}&nbsp;</em>
                                    )}
                                    {roomDetail.scoreTxt}
                                </span>
                            )}
                            {roomDetail.infoAddr && (
                                <span className={style.infoAddr}>
                                    {roomDetail.infoAddr}
                                </span>
                            )}
                            {roomDetail.infoOpt && (
                                <span className={style.infoOpt}>
                                    {roomDetail.infoOpt}
                                </span>
                            )}
                            {roomDetail.infoEvt && (
                                <span className={style.infoEvt}>
                                    {roomDetail.infoEvt}
                                </span>
                            )}
                            {roomDetail.ceoSay && (
                                <span className={style.infoCeo}>
                                    <strong>사장님 한마디</strong>
                                    <span className={style.clamp}>
                                        {roomDetail.ceoSay}
                                    </span>
                                </span>
                            )}
                        </span>
                        <span className={style.btn}>
                            {roomDetail.soldOut ? (
                                <ButtonDefault type="button" disable={true}>
                                    예약 마감
                                </ButtonDefault>
                            ) : (
                                <ButtonDefault type="button" disable={false}>
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
