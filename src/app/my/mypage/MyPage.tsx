'use client'

import React, { useContext } from 'react'
import style from '@/app/my/mypage/mypage.module.scss'

import UserInfoForm from '@/app/components/mypage/UserInfoForm'

import { IsLoginContext } from '@/app/provider/IsLoginProvider'

function MyPage() {
    const { userInfo } = useContext(IsLoginContext)
    const { name, nickName, phoneNumber, picture } = userInfo
    console.log(userInfo)
    return (
        <div className={style.myInfoBackGround}>
            <section className={style.topArea}>
                <strong className={style.title}>내 정보 수정</strong>
                <div>
                    {picture ? (
                        <img
                            className={style.userImg}
                            src={picture}
                            alt="error"
                        />
                    ) : (
                        <img
                            className={style.userImg}
                            src="https://image.goodchoice.kr/profile/ico/ico_21.png"
                            alt="error"
                        />
                    )}

                    <p className={style.userLoginType}>
                        {userInfo.social} 회원으로 로그인
                    </p>
                </div>
            </section>
            <UserInfoForm title="닉네임" value={nickName} />
            <UserInfoForm title="예약자 이름" value={name} />
            <UserInfoForm title="휴대폰 번호" value={phoneNumber} />

            <div className={style.botButton}>
                <p className={style.p}>여기어때를 이용하고 싶지 않으신가요?</p>
                <button type="button" className={style.button}>
                    로그아웃
                </button>
            </div>
        </div>
    )
}
export default MyPage
