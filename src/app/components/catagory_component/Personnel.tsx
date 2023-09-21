'use client'

import { useState } from 'react'
import style from '@/app/styles/RoomCata.module.scss'

export default function Personnel() {
    let [count, setCount] = useState(2)

    return (
        <section className={style.personnelBox}>
            <strong>인원</strong>
            <div>
                <button
                    className={style.personnelMinus}
                    onClick={() => {
                        if (count > 2) {
                            setCount(count - 1)
                        }
                    }}></button>
                <span className={style.personnelCount}>{count}</span>
                <button
                    className={style.personnelPlus}
                    onClick={() => {
                        setCount(count + 1)
                    }}></button>
            </div>
        </section>
    )
}
