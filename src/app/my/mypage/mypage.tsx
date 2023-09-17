'use client'

import React from 'react'
import style from '@/app/my/mypage/mypage.module.scss'
import NickNameForm from '@/app/components/mypage_component/NickNameForm'
import UserNameForm from '@/app/components/mypage_component/UserNameForm'
import PhoneNumberForm from '@/app/components/mypage_component/PhoneNumberForm'

export default function MyPage() {
    return (
        <>
            <nav className={style.sideBar}>
                <ul>
                    <li className={style.list}>
                        <a href="/" className={style.a}>
                            예약 내역
                        </a>
                    </li>
                    <li className={style.list}>
                        <a href="/" className={style.a}>
                            내 정보 관리
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={style.myInfoBackGround}>
                <NickNameForm />
                <UserNameForm />
                <PhoneNumberForm />

                <div className={style.botButton}>
                    <p className={style.p}>
                        여기어때를 이용하고 싶지 않으신가요?
                    </p>
                    <button type="button" className={style.button}>
                        로그아웃
                    </button>
                    <button type="button" className={style.button}>
                        <a href="/">회원탈퇴</a>
                    </button>
                </div>
                <button></button>
            </div>
        </>
    )
}
