import React from 'react'
import style from '@/app/components/btns/btn.module.scss'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'

const ButtonLike = ({ ...props }) => {
    return (
        <button
            className={`${props.className} ${style.btnLike} ${
                props.Liked ? style.on : ''
            }`}
            onClick={props.onClick}>
            <FavoriteTwoToneIcon />
        </button>
    )
}

export default ButtonLike
