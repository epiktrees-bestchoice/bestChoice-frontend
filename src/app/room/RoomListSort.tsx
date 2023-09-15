import React from 'react'
import style from '@/app/components/btns/btn.module.scss'
import ButtonSort from '@/app/components/btns/ButtonSort'

const RoomListSort = () => {
    return (
        <div className={style.btnWrap}>
            <ButtonSort text={'거리 순'} on={true} />
            <ButtonSort text={'낮은 가격 순'} />
            <ButtonSort text={'높은 가격 순'} />
        </div>
    )
}

export default RoomListSort
