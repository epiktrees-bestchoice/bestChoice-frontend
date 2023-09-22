import React from 'react'
import LikeList from '@/app/components/booking_component/LikeList'
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
export default Likes
