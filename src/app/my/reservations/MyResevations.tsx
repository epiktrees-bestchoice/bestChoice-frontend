import React from 'react'
import List from '@/app/components/booking_component/List'
import style from '@/app/my/reservations/reservations.module.scss'

function MyReservations() {
    const used = true
    const reserve = false

    return (
        <div>
            <section className={style.listBox}>
                <h3 className={style.listText}>예약 내역</h3>
                <ul className={style.listWrap}>
                    <List isUsed={used} />
                </ul>
            </section>
            <section className={style.listBox}>
                <h3 className={style.listText}>이용 내역</h3>
                <ul className={style.listWrap}>
                    <List isUsed={reserve} />
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
    )
}
export default MyReservations
