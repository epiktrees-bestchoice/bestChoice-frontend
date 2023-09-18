import React, { useState, useEffect } from 'react'

import style from '@/app/more/more.module.scss'

function MyInqury() {
    const [inquries, SetInquries] = useState([])

    useEffect(() => {
        // axios 사용 get하는 함수 추가, 일단 문의 없도록.
    })

    return (
        <div className={style.inquiryEmpty}>
            <b>등록된 1:1 문의가 없습니다.</b>
            <span>
                여기어때는 회원님들의 소중한 의견에 귀기울여
                <br />
                신속하고 정확하게 답변드리도록 하겠습니다.
            </span>
        </div>
    )
}

export default MyInqury
