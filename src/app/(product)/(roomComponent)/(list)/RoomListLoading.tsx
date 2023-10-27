import React, { useState } from 'react'
import style from '@/app/(product)/room.module.scss'

const RoomListLoading = () => {
    return (
        <>
            <li className={`${style.roomListItem} ${style.skeleton}`}>
                <div className={style.link}>
                    <span className={style.boxImg}></span>
                    <span className={style.boxTxt}>
                        <span className={style.info}>
                            <strong className={style.infoTit}></strong>
                            <span className={style.infoScore}></span>
                            <span className={style.infoAddr}></span>
                            <span className={style.infoOpt}></span>
                            <span className={style.infoEvt}></span>
                        </span>
                        <span className={style.price}>
                            <span className={style.priceDetail}></span>
                        </span>
                    </span>
                </div>
            </li>
            <li className={`${style.roomListItem} ${style.skeleton}`}>
                <div className={style.link}>
                    <span className={style.boxImg}></span>
                    <span className={style.boxTxt}>
                        <span className={style.info}>
                            <strong className={style.infoTit}></strong>
                            <span className={style.infoScore}></span>
                            <span className={style.infoAddr}></span>
                            <span className={style.infoOpt}></span>
                            <span className={style.infoEvt}></span>
                        </span>
                        <span className={style.price}>
                            <span className={style.priceDetail}></span>
                        </span>
                    </span>
                </div>
            </li>{' '}
            <li className={`${style.roomListItem} ${style.skeleton}`}>
                <div className={style.link}>
                    <span className={style.boxImg}></span>
                    <span className={style.boxTxt}>
                        <span className={style.info}>
                            <strong className={style.infoTit}></strong>
                            <span className={style.infoScore}></span>
                            <span className={style.infoAddr}></span>
                            <span className={style.infoOpt}></span>
                            <span className={style.infoEvt}></span>
                        </span>
                        <span className={style.price}>
                            <span className={style.priceDetail}></span>
                        </span>
                    </span>
                </div>
            </li>
        </>
    )
}

export default RoomListLoading
