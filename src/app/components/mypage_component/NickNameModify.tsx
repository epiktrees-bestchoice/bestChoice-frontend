import React, { useCallback, useEffect, useRef, useState } from 'react'
import style from '@/app/my/mypage/mypage.module.scss'

export default function NickNameModify({
    handle,
    handler,

    setNickName,
}) {
    const inputRef = useRef(null)

    function ChangeName() {
        setNickName(inputRef.current.value)
    }

    return (
        <div className={style.modifyBox}>
            <section>
                <input
                    className={style.input}
                    type="text"
                    placeholder="체크인시 필요한 정보입니다"
                    ref={inputRef}></input>

                <button type="button" className={style.button}>
                    딴거할래요
                </button>
            </section>
            <div className={style.buttonsBox}>
                <button
                    type="button"
                    className={style.applyButton}
                    onClick={() => {
                        if (inputRef.current.value != '') {
                            ChangeName()
                        }

                        handler({ handle })
                    }}>
                    수정완료
                </button>
                <button
                    type="button"
                    className={style.cancelButton}
                    onClick={() => {
                        handler({ handle })
                    }}>
                    수정취소
                </button>
            </div>
        </div>
    )
}
