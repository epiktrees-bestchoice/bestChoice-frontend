import React from 'react'
import style from '@/app/components/btns/btn.module.scss'

const ButtonDefault = ({ ...props }) => {
    return (
        <button
            type={props.type}
            disabled={props.disable}
            className={`${style.btnDefault} ${
                props.disable ? style.disable : ''
            } ${props.style == 'sub' ? style.sub : ''}`}
            onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default ButtonDefault
