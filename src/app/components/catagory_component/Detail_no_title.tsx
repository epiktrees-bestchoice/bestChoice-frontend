import style from '@/app/styles/RoomCata.module.scss'

export default function Detail_no_title() {
    return (
        <section className={style.detail_checkbox}>
            <ul>
                <li>
                    <input id="booking1" type="checkbox"></input>
                    <label htmlFor="booking1">예약 가능</label>
                </li>
                <li>
                    <input id="promotion2" type="checkbox"></input>
                    <label htmlFor="promotion2">프로모션</label>
                </li>
            </ul>
        </section>
    )
}
