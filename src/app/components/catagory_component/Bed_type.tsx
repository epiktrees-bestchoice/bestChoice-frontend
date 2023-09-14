import style from '@/app/styles/RoomCata.module.scss'

export default function Bed_type() {
    return (
        <section className={style.bedComponentBox}>
            <strong className={style.bedTypeStrong}>베드 타입</strong>
            <div className={style.bedTypeBox}>
                <p className={style.bedBox}>
                    <input
                        className={style.bedBoxInput}
                        type="checkbox"></input>
                    <label className={style.bedBoxLabel}>싱글</label>
                </p>
                <p className={style.bedBox}>
                    <input
                        className={style.bedBoxInput}
                        type="checkbox"></input>
                    <label className={style.bedBoxLabel}>더블</label>
                </p>
                <p className={style.bedBox}>
                    <input
                        className={style.bedBoxInput}
                        type="checkbox"></input>
                    <label className={style.bedBoxLabel}>트윈</label>
                </p>
                <p className={style.bedBox}>
                    <input
                        className={style.bedBoxInput}
                        type="checkbox"></input>
                    <label className={style.bedBoxLabel}>온돌</label>
                </p>
            </div>
        </section>
    )
}
