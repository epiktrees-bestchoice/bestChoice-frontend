import React from 'react'

import style from '@/app/more/more.module.scss'

const MoreNotice = () => {
    return (
        <div className={style.notice}>
            <h3>서비스 공지사항</h3>
            <ul>
                <li className={style.noticeItem}>
                    <b>[발표] 9월 더블텐데이 2배 페이백 이벤트</b>
                    <br />
                    <span>2023.09.20</span>
                </li>
                <li className={style.noticeItem}>
                    <b>[발표] 9월 3차 '여기어때 응원하기' 이벤트</b>
                    <br />
                    <span>2023.09.20</span>
                </li>
                <li className={style.noticeItem}>
                    <b>[공지] 여기어때 개인정보처리방침 변경 안내</b>
                    <br />
                    <span>2023.09.20</span>
                </li>
                <li className={style.noticeItem}>
                    <b>[발표] 8월 리뷰왕을 찾습니다 당첨 안내</b>
                    <br />
                    <span>2023.09.12</span>
                </li>
            </ul>
        </div>
    )
}

export default MoreNotice
