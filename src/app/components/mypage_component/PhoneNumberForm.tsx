import React, { useCallback, useEffect, useRef, useState } from 'react'
import style from '@/app/my/mypage/mypage.module.scss'
import NumberModify from '@/app/components/mypage_component/NumberModify'

export default function PhoneNumberForm() {
    const [IsPhoneVisible, setIsPhoneVisible] = useState(true)
    const [PhoneNumber, setPhoneNumber] = useState('01050966940')

    function OnSubmit(e) {
        e.preventDefault()
    }

    return (
        <form
            onSubmit={(e) => {
                OnSubmit(e)
            }}>
            <section className={style.userNumArea}>
                <div className={`${style.nickNameBox} ${style.numberBox}`}>
                    <b className={style.nickName}>휴대폰 번호</b>
                    <span className={style.userNickName}>{PhoneNumber}</span>
                    <div className={style.safetyText}>
                        <p>
                            개인 정보 보호를 위해 내 정보는 모두 안전하게
                            암호화됩니다.
                        </p>
                    </div>

                    {IsPhoneVisible && (
                        <div>
                            <button
                                className={style.modifyButton}
                                onClick={() => {
                                    setIsPhoneVisible(false)
                                }}>
                                수정
                            </button>
                        </div>
                    )}
                    {IsPhoneVisible ? null : (
                        <NumberModify
                            handle={IsPhoneVisible}
                            handler={setIsPhoneVisible}
                            setPhoneNumber={setPhoneNumber}
                        />
                    )}
                </div>
            </section>
        </form>
    )
}
