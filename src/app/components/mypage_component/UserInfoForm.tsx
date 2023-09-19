import React, { useCallback, useEffect, useRef, useState } from 'react'
import style from '@/app/my/mypage/mypage.module.scss'
import Modify from '@/app/components/mypage_component/Modify'

export default function UserInfoForm({ data }) {
    const [IsUserNameVisible, setIsUserNameVisible] = useState(true)
    const [inputValue, setInputValue] = useState(data.description)

    function OnSubmit(e) {
        e.preventDefault()
    }
    return (
        <form
            onSubmit={(e) => {
                OnSubmit(e)
            }}>
            <section className={style.userNumArea}>
                <div
                    className={`${style.nickNameBox} ${
                        data.textHandle ? style.nickNameBoxNumberBox : ''
                    }`}>
                    <b className={style.nickName}>{data.title}</b>
                    <span className={style.userNickName}>{inputValue}</span>
                    {data.textHandle && (
                        <div className={style.safetyText}>
                            <p>
                                개인 정보 보호를 위해 내 정보는 모두 안전하게
                                암호화됩니다.
                            </p>
                        </div>
                    )}
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
                            setInputValue={setInputValue}
                        />
                    )}
                </div>
            </section>
        </form>
    )
}
