import React from 'react'
import style from '@/app/components/btns/btn.module.scss'

const BtnDefault = ({ ...props }) => {
    return (
        <button
            disabled={props.disable}
            className={`${style.btnDefault} ${
                props.disable ? style.disable : ''
            } ${props.style == 'sub' ? style.sub : ''}`}>
            {props.text}
        </button>
    )
}

export default BtnDefault
