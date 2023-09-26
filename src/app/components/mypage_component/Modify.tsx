import React, { useCallback, useEffect, useRef, useState } from 'react'
import style from '@/app/my/mypage/mypage.module.scss'

export default function Modify({ handle, handler }) {
    const inputRef = useRef(null)

    function ChangeName() {}

    return (
        <div className={style.modifyBox}>
            <section>
                <input
                    ref={inputRef}
                    className={style.input}
                    type="text"
                    placeholder="체크인시 필요한 정보입니다"></input>
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
