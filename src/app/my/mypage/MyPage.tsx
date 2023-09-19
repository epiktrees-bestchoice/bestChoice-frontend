'use client'

import React from 'react'
import style from '@/app/my/mypage/mypage.module.scss'

import NickNameForm from '@/app/components/mypage_component/NickNameForm'
import UserNameForm from '@/app/components/mypage_component/UserNameForm'
import PhoneNumberForm from '@/app/components/mypage_component/PhoneNumberForm'

function MyPage() {
    return (
        <div className={style.myInfoBackGround}>
            <NickNameForm />
            <UserNameForm />
            <PhoneNumberForm />

            <div className={style.botButton}>
                <p className={style.p}>여기어때를 이용하고 싶지 않으신가요?</p>
                <button type="button" className={style.button}>
                    로그아웃
                </button>
                <button type="button" className={style.button}>
                    <a href="/">회원탈퇴</a>
                </button>
            </div>
        </div>
    )
}
export default MyPage
