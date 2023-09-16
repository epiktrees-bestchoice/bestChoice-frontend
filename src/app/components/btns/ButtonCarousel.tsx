import React from 'react'
import style from '@/app/components/btns/btn.module.scss'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const ButtonCarousel = ({ ...props }) => {
    return (
        <button
            className={`${style.btnCarousel} ${props.prev ? style.prev : ''} ${
                props.next ? style.next : ''
            }`}
            onClick={props.onClick}>
            {props.prev && <KeyboardArrowLeftIcon />}
            {props.next && <KeyboardArrowRightIcon />}
            <span className="blind">{props.text}</span>
        </button>
    )
}

export default ButtonCarousel
