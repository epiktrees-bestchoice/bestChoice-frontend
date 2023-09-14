import style from '@/app/styles/RoomCata.module.scss'

export default function Detail_title() {
    return (
        <section className={style.detailListBox}>
            <strong className={style.detailTitle}>호텔 유형</strong>
            <ul>
                <li className={style.detailList}>
                    <input id="booking" type="checkbox"></input>
                    <label className={style.detailListLabel} htmlFor="booking">
                        예약 가능
                    </label>
                </li>
                <li className={style.detailList}>
                    <input id="promotion" type="checkbox"></input>
                    <label
                        className={style.detailListLabel}
                        htmlFor="promotion">
                        프로모션
                    </label>
                </li>
            </ul>
        </section>
    )
}
