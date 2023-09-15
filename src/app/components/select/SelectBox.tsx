'use client'
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import style from '@/app/components/select/select.module.scss'

const SelectBox = () => {
    const [currentValue, setCurrentValue] = useState('서울')
    const optionShowRef = useRef(null)

    const handleChangeSelect = (e) => {
        // 지역별 링크 수정시 e.preventDefault() 삭제 필요 20230916 by jyj
        e.preventDefault()
        const { innerText } = e.target
        const liAll = e.target.parentElement.parentElement.childNodes
        setCurrentValue(innerText)
        for (var i = 0; i < liAll.length; i++) {
            liAll[i].classList.remove(style['on'])
        }
        e.target.parentElement.classList.add(style['on'])
    }
    return (
        <div className={style.select}>
            <label
                className={style.selectLabel}
                onMouseOver={() => {
                    optionShowRef.current.classList.add(style['on'])
                }}>
                {currentValue}
                <ArrowDropDownIcon className={style.icon} />
            </label>
            <ul
                className={style.selectOption}
                ref={optionShowRef}
                onMouseLeave={() => {
                    optionShowRef.current.classList.remove(style['on'])
                }}>
                <li className={`${style.item} ${style.on}`}>
                    <Link href="/" onClick={handleChangeSelect}>
                        서울
                    </Link>
                </li>
                <li className={style.item}>
                    <Link href="/" onClick={handleChangeSelect}>
                        경기
                    </Link>
                </li>
                <li className={style.item}>
                    <Link href="/" onClick={handleChangeSelect}>
                        인천
                    </Link>
                </li>
                <li className={style.item}>
                    <Link href="/" onClick={handleChangeSelect}>
                        강원
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SelectBox
