import style from '@/app/styles/RoomCata.module.scss'

export default function DetailNoTitle() {
    return (
        <section className={style.detailListBox}>
            <ul>
                <li className={style.detailList}>
                    <input id="booking1" type="checkbox"></input>
                    <label className={style.detailListLabel} htmlFor="booking1">
                        예약 가능
                    </label>
                </li>
                <li className={style.detailList}>
                    <input id="promotion2" type="checkbox"></input>
                    <label
                        className={style.detailListLabel}
                        htmlFor="promotion2">
                        프로모션
                    </label>
                </li>
            </ul>
        </section>
    )
}
