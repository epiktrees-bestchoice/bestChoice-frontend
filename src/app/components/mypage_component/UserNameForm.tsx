import React, { useCallback, useEffect, useRef, useState } from 'react'
import style from '@/app/my/mypage/mypage.module.scss'
import UserModify from '@/app/components/mypage_component/UserModify'

export default function UserNameForm() {
    const [IsUserNameVisible, setIsUserNameVisible] = useState(true)
    const [UserName, setUserName] = useState('변재정')
    function OnSubmit(e) {
        e.preventDefault()
    }
    return (
        <form
            onSubmit={(e) => {
                OnSubmit(e)
            }}>
            <section className={style.userNumArea}>
                <div className={style.nickNameBox}>
                    <b className={style.nickName}>예약자 이름</b>
                    <span className={style.userNickName}>{UserName}</span>
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
                        <UserModify
                            handle={IsUserNameVisible}
                            handler={setIsUserNameVisible}
                            setUserName={setUserName}
                        />
                    )}
                </div>
            </section>
        </form>
    )
}
