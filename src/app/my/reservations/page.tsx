'use client'

import React from 'react'

import style from '@/app/my/reservations/reservations.module.scss'
import SideBar from '@/app/components/mypage_component/SideBar'
import Used from '@/app/components/booking_component/Used'
import Booking from '@/app/components/booking_component/Booking'

function Page() {
    return (
        <div className={`inner ${style.background}`}>
            <div className={style.backgroundSide}>
                <SideBar />
            </div>
            <div>
                <section className={style.listBox}>
                    <h3 className={style.listText}>예약 내역</h3>
                    <ul className={style.listWrap}>
                        <Used />
                    </ul>
                </section>
                <section className={style.listBox}>
                    <h3 className={style.listText}>이용 내역</h3>
                    <ul className={style.listWrap}>
                        <Booking />
                    </ul>
                    <div className={style.seeMoreButton}>
                        더보기
                        <img
                            src="https://reservation.goodchoice.kr/icn_arrow_down.svg"
                            alt="더보기"
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Page
