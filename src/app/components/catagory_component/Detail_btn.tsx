import RoomCataCSS from '@/app/styles/RoomCata.module.scss'

export default function Detail_btn() {
    return (
        <>
            <div className={RoomCataCSS.detail_div}>
                <h3 className={RoomCataCSS.detail_cata_word}>상세 조건</h3>
            </div>
            <div className={RoomCataCSS.btn_wrap}>
                <button>초기화</button>
                <button>적용</button>
            </div>
        </>
    )
}
