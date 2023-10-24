import React from 'react'
import style from '@/app/room/room.module.scss'

const RoomDetailLoading = () => {
    return (
        <div className="content">
            <div className={`inner ${style.room}`}>
                <div className={`${style.roomDetail} ${style.skeleton}`}>
                    <div className={style.boxImg}>
                        <div className={style.slideView}></div>
                        <div className={style.slide}>
                            <div className={style.slideWrap}>
                                <ul className={style.slideList}>
                                    <li className={style.slideListItem}></li>
                                    <li className={style.slideListItem}></li>
                                    <li className={style.slideListItem}></li>
                                    <li className={style.slideListItem}></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={style.boxTxt}>
                        <span className={style.infoAddr}></span>
                        <strong className={style.tit}></strong>
                        <span className={style.info}>
                            <span className={style.infoScore}></span>
                            <span className={style.infoEvt}></span>
                            <span className={style.infoCeo}>
                                <span className={style.clamp}></span>
                            </span>
                        </span>
                        <span className={style.btn}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomDetailLoading
