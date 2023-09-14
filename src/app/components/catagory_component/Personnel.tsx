import { useState } from 'react'
import style from '@/app/styles/RoomCata.module.scss'

export default function Personnel() {
    let [Count, setCount] = useState(1)

    return (
        <section className={style.personnelBox}>
            <strong>인원</strong>
            <div>
                <button
                    className={style.personnelMinus}
                    onClick={() => {
                        if (Count > 1) {
                            Count = Count - 1
                            setCount(Count)
                        }
                    }}></button>
                <span className={style.personnelCount}>{Count}</span>
                <button
                    className={style.personnelPlus}
                    onClick={() => {
                        Count = Count + 1
                        setCount(Count)
                    }}></button>
            </div>
        </section>
    )
}
