'use client'
import React, { useState } from 'react'
import style from '@/app/components/btns/btn.module.scss'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'

const ButtonLike = ({ ...props }) => {
    const [isLike, setIsLike] = useState(false)

    const handleClick = () => {
        setIsLike((prev) => !prev)
    }

    const likeToggle = isLike ? true : false
    return (
        <button
            className={`${props.className} ${style.btnLike} ${
                likeToggle ? style.on : ''
            }`}
            onClick={handleClick}>
            <FavoriteTwoToneIcon />
        </button>
    )
}

export default ButtonLike
