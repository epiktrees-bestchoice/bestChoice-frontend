import style from '@/app/styles/RoomCata.module.scss'

export default function Detail_title() {
    return (
        <section className={style.detail_checkbox}>
            <strong className={style.detail_title}>호텔 유형</strong>
            <ul>
                <li>
                    <input id="booking" type="checkbox"></input>
                    <label htmlFor="booking">예약 가능</label>
                </li>
                <li>
                    <input id="promotion" type="checkbox"></input>
                    <label htmlFor="promotion">프로모션</label>
                </li>
            </ul>
        </section>
    )
}
