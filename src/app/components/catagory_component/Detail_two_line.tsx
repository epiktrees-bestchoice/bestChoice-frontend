import RoomCataCSS from '@/app/styles/RoomCata.module.scss'

export default function Detail_two_line() {
    return (
        <>
            <section className={RoomCataCSS.detail_checkbox}>
                <strong className={RoomCataCSS.detail_title}>호텔 유형</strong>
                <ul className={RoomCataCSS.detail_two_line_list_box}>
                    <li>
                        <input id="booking2" type="checkbox"></input>
                        <label htmlFor="booking2">예약 가능</label>
                    </li>
                    <li>
                        <input id="promotion3" type="checkbox"></input>
                        <label htmlFor="promotion3">프로모션</label>
                    </li>
                    <li>
                        <input id="promotion4" type="checkbox"></input>
                        <label htmlFor="promotion4">프로모션</label>
                    </li>
                    <li>
                        <input id="promotion5" type="checkbox"></input>
                        <label htmlFor="promotion5">프로모션</label>
                    </li>
                    <li>
                        <input id="promotion6" type="checkbox"></input>
                        <label htmlFor="promotion6">프로모션</label>
                    </li>
                    <li>
                        <input id="promotion7" type="checkbox"></input>
                        <label htmlFor="promotion7">프로모션</label>
                    </li>
                </ul>
            </section>
        </>
    )
}
