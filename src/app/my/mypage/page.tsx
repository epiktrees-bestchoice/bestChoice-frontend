'use client'

import React from 'react'
import MyPage from '@/app/my/mypage/mypage'
import style from '@/app/my/mypage/mypage.module.scss'

function Page() {
    return (
        <div className={style.background}>
            <MyPage />
        </div>
    )
}
export default Page
