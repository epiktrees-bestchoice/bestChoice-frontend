'use client'

import React, { useState } from 'react'
import style from '@/app/styles/RoomCata.module.scss'
import Slider from 'rc-slider'

import 'rc-slider/assets/index.css'

export default function Price() {
    const [range, setRange] = useState([1, 30]) // 초기 범위 설정

    const handleRangeChange = (newRange) => {
        setRange(newRange)
    }

    return (
        <>
            <div>
                <strong>가격 &nbsp;&nbsp;</strong>
                <span className={style.prideRange}>
                    {range[0]}만원 이상 ~ {range[1]}만원 이하
                </span>
            </div>

            <div className={style.rangeBox}>
                <Slider
                    range
                    min={1}
                    max={30}
                    value={range}
                    onChange={handleRangeChange}
                    handleStyle={{
                        height: 28,
                        width: 30,
                        marginTop: -12,
                        marginLeft: -2,
                    }}
                />
            </div>
            <span className={style.minMoney}>1만원</span>
            <span className={style.maxMoney}>30만원</span>
        </>
    )
}
