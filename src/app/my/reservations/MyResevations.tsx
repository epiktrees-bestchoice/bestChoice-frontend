import React from 'react'
import List from '@/app/components/booking/List'
import style from '@/app/my/reservations/reservations.module.scss'

function MyReservations() {
    return (
        <div>
            <section className={style.listBox}>
                <h3 className={style.listText}>예약 내역</h3>
                <ul className={style.listWrap}>
                    <List />
                </ul>
            </section>
        </div>
    )
}
export default MyReservations
