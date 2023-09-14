import style from '@/app/styles/RoomCata.module.scss'

export default function Bed_type() {
    return (
        <section className={style.bed_type_box}>
            <strong>베드 타입</strong>
            <div>
                <p>
                    <input type="checkbox"></input>
                    <label className={style.label_room1}>싱글</label>
                </p>
                <p>
                    <input type="checkbox"></input>
                    <label className={style.label_room1}>더블</label>
                </p>
                <p>
                    <input type="checkbox"></input>
                    <label className={style.label_room1}>트윈</label>
                </p>
                <p>
                    <input type="checkbox"></input>
                    <label className={style.label_room1}>온돌</label>
                </p>
            </div>
        </section>
    )
}
