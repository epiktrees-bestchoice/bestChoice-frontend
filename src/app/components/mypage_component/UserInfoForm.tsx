import React, { useState } from 'react'
import style from '@/app/my/mypage/mypage.module.scss'
import Modify from '@/app/components/mypage_component/Modify'

export default function UserInfoForm({ title, value }) {
    const [IsUserNameVisible, setIsUserNameVisible] = useState(true)

    function OnSubmit(e) {
        e.preventDefault()
    }
    return (
        <form
            onSubmit={(e) => {
                OnSubmit(e)
            }}>
            <section className={style.userNumArea}>
                <div className={`${style.nickNameBox}`}>
                    <b className={style.nickName}>{title}</b>
                    <span className={style.userNickName}>{value}</span>
                    <p className={style.safetyText}>
                        개인 정보 보호를 위해 내 정보는 모두 안전하게
                        암호화됩니다.
                    </p>
                    {IsUserNameVisible && (
                        <div>
                            <button
                                className={style.modifyButton}
                                onClick={() => {
                                    setIsUserNameVisible(false)
                                }}>
                                수정
                            </button>
                        </div>
                    )}
                    {IsUserNameVisible ? null : (
                        <Modify
                            handle={IsUserNameVisible}
                            handler={setIsUserNameVisible}
                        />
                    )}
                </div>
            </section>
        </form>
    )
}
