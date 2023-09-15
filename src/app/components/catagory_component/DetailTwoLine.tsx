import style from '@/app/styles/RoomCata.module.scss'

export default function DetailTwoLine() {
    return (
        <>
            <section className={style.detailListBox}>
                <strong className={style.detailTitle}>호텔 유형</strong>
                <ul className={style.detailListGrid}>
                    <li className={style.detailList}>
                        <input id="booking2" type="checkbox"></input>
                        <label
                            className={style.detailListLabel}
                            htmlFor="booking2">
                            예약 가능
                        </label>
                    </li>
                    <li className={style.detailList}>
                        <input id="promotion3" type="checkbox"></input>
                        <label
                            className={style.detailListLabel}
                            htmlFor="promotion3">
                            프로모션
                        </label>
                    </li>
                    <li className={style.detailList}>
                        <input id="promotion4" type="checkbox"></input>
                        <label
                            className={style.detailListLabel}
                            htmlFor="promotion4">
                            프로모션
                        </label>
                    </li>
                    <li className={style.detailList}>
                        <input id="promotion5" type="checkbox"></input>
                        <label
                            className={style.detailListLabel}
                            htmlFor="promotion5">
                            프로모션
                        </label>
                    </li>
                    <li className={style.detailList}>
                        <input id="promotion6" type="checkbox"></input>
                        <label
                            className={style.detailListLabel}
                            htmlFor="promotion6">
                            프로모션
                        </label>
                    </li>
                    <li className={style.detailList}>
                        <input id="promotion7" type="checkbox"></input>
                        <label
                            className={style.detailListLabel}
                            htmlFor="promotion7">
                            프로모션
                        </label>
                    </li>
                </ul>
            </section>
        </>
    )
}
