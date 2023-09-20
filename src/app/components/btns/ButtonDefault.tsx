import React from 'react'
import style from '@/app/components/btns/btn.module.scss'

const ButtonDefault = ({ ...props }) => {
    return (
        <button
            type={props.type}
            disabled={props.disable}
            className={`${style.btnDefault}${
                props.disable ? style.disable : ''
            } ${props.style == 'sub' ? style.sub : ''}${props.className}`}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default ButtonDefault
