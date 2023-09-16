import React from 'react'
import style from '@/app/room/room.module.scss'
import ButtonDefault from '@/app/components/btns/ButtonDefault'
import RoomDetailSlide from '@/app/room/RoomDetailSlide'

const RoomDetailPage = (props) => {
    const params = props.params.id
    const exmDetail =
        // path 수정 필요 - 20230825 by oliv (수정 완료시 주석 삭제)
        {
            id: '1',
            name: '명동 밀리오레호텔',
            img: '../img/roomList1.jpg',
            score: '8.9',
            scoreTxt: '만족해요',
            infoAddr: '중구 충무로1가',
            infoOpt: '예약취소가능',
            infoEvt: '무료주차,넷플릭스 고객 개인 계정 로그인 필수',
            rentHalf: '대실',
            rentHalfPrice: '35,000',
            rentAll: '숙박',
            rentAllPrice: '80,000',
            rentBedge: '예약특가',
            ceoSay: '04년생 생일지나야 합니다. 투숙 가능 생일이 지나지 않았을 경우 동성만 이용 가능하지시만, 부모님 동의서가 필요, 동의서는 호텔에 문의하면 보내드립니다. 또한 보여지는 객실 사진과 다른 구조의 객실로 배정 받을 수 있는 점 참고하여 예약해주시기 바랍니다.',
            soldOut: false,
        }
    return (
        <div className="content">
            <div className="inner">
                <div className={style.roomDetail}>
                    <div className={style.boxImg}>
                        <RoomDetailSlide />
                    </div>
                    <div className={style.boxTxt}>
                        <strong className={style.tit}>{exmDetail.name}</strong>
                        <span className={style.info}>
                            <span className={style.infoScore}>
                                <em>{exmDetail.score}</em>&nbsp;
                                {exmDetail.scoreTxt}
                            </span>
                            <span className={style.infoAddr}>
                                {exmDetail.infoAddr}
                            </span>
                            <span className={style.infoOpt}>
                                {exmDetail.infoOpt}
                            </span>
                            <span className={style.infoEvt}>
                                {exmDetail.infoEvt}
                            </span>
                            <span className={style.infoCeo}>
                                <strong>사장님 한마디</strong>
                                <span className={style.clamp}>
                                    {exmDetail.ceoSay}
                                </span>
                            </span>
                        </span>
                        <span className={style.btn}>
                            {exmDetail.soldOut ? (
                                <ButtonDefault
                                    text="예약 마감"
                                    disable={true}
                                />
                            ) : (
                                <ButtonDefault
                                    text="숙소 예약"
                                    disable={false}
                                />
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomDetailPage
