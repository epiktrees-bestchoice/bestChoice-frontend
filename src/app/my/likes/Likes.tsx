import React from 'react'
import LikeList from '@/app/components/booking/LikeList'
import style from '@/app/my/reservations/reservations.module.scss'

function Likes() {
    const used = true
    const reserve = false

    return (
        <div>
            <section className={style.listBox}>
                <h3 className={style.listText}>좋아요</h3>
                <ul className={style.listWrap}>
                    <LikeList />
                </ul>
            </section>
        </div>
    )
}
export default Likes
