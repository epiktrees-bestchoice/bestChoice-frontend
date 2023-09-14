import <style></style> from '@/app/styles/RoomCata.module.scss'

export default function Detail_btn() {
    return (
        <>
            <div className={<style></style>.detail_div}>
                <h3 className={<style></style>.detail_cata_word}>상세 조건</h3>
            </div>
            <div className={<style></style>.btn_wrap}>
                <button>초기화</button>
                <button>적용</button>
            </div>
        </>
    )
}
