import React from 'react'
import style from '@/app/components/btns/btn.module.scss'
import CheckIcon from '@mui/icons-material/Check'

const ButtonSort = ({ ...props }) => {
    return (
        <button
            value={props.value}
            className={`${style.btnSort} ${props.on ? style.on : ''}`}
            type="button"
            onClick={props.onClick}>
            <CheckIcon className={style.btnSrchIcon} />
            {props.text}
        </button>
    )
}

export default ButtonSort
