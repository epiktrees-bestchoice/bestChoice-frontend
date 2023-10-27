'use client'

import { useState } from 'react'
import style from '@/app/styles/RoomCata.module.scss'

export default function Personnel() {
    let [count, setCount] = useState(2)

    return (
        <div className={style.countButtons}>
            <button
                className={style.minus}
                onClick={() => {
                    if (count > 2) {
                        setCount(count - 1)
                    }
                }}></button>
            <span className={style.number}>{count}</span>
            <button
                className={style.plus}
                onClick={() => {
                    setCount(count + 1)
                }}></button>
        </div>
    )
}
