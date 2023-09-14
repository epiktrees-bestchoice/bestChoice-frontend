import style from '@/app/styles/RoomCata.module.scss'

export default function Detail_btn() {
    return (
        <>
            <div className={style.detailBox}>
                <h3 className={style.detailCata}>상세 조건</h3>
            </div>
            <div className={style.detailButtonBox}>
                <button className={style.detailButtonReset}>초기화</button>
                <button className={style.detailButtonApply}>적용</button>
            </div>
        </>
    )
}
