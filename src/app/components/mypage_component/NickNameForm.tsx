import React, { useCallback, useEffect, useRef, useState } from 'react'
import style from '@/app/my/mypage/mypage.module.scss'
import NickNameModify from '@/app/components/mypage_component/NickNameModify'

export default function NickNameForm() {
    const [IsNickNameVisible, setIsNickNameVisible] = useState(true)
    const [Nickname, setNickName] = useState('에픽')
    function OnSubmit(e) {
        e.preventDefault()
    }
    return (
        <form
            onSubmit={(e) => {
                OnSubmit(e)
            }}>
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
                <div className={style.nickNameBox}>
                    <b className={style.nickName}>닉네임</b>
                    <span className={style.userNickName}>{Nickname}</span>
                    {IsNickNameVisible && (
                        <div>
                            <button
                                className={style.modifyButton}
                                onClick={() => {
                                    setIsNickNameVisible(false)
                                }}>
                                수정
                            </button>
                        </div>
                    )}

                    {IsNickNameVisible ? null : (
                        <NickNameModify
                            handle={IsNickNameVisible}
                            handler={setIsNickNameVisible}
                            setNickName={setNickName}
                        />
                    )}
                </div>
            </section>
        </form>
    )
}
