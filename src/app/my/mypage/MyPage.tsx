'use client'

import React, { useState } from 'react'
import style from '@/app/my/mypage/mypage.module.scss'

import UserInfoForm from '@/app/components/mypage_component/UserInfoForm'

function MyPage() {
    const [nickName, setNickName] = useState('에픽')
    const [phoneNumber, setPhoneNumber] = useState('01050966940')
    const [userName, setUserName] = useState('변재정')

    const formBox = [
        {
            title: '닉네임',
            description: nickName,
            textHandle: false,
        },
        { title: '예약자 이름', description: userName, textHandle: false },
        {
            title: '휴대폰 번호',
            description: phoneNumber,

            textHandle: true,
        },
    ]

    return (
        <div className={style.myInfoBackGround}>
            <section className={style.topArea}>
                <strong className={style.title}>내 정보 수정</strong>
                <div>
                    <div>
                        <img
                            className={style.userImg}
                            src="https://image.goodchoice.kr/profile/ico/ico_21.png"
                            alt="error"
                        />
                    </div>
                    <p className={style.userLoginType}>
                        KakaoTalk 회원으로 로그인
                    </p>
                </div>
            </section>

            <UserInfoForm data={formBox[0]} />
            <UserInfoForm data={formBox[1]} />
            <UserInfoForm data={formBox[2]} />

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
