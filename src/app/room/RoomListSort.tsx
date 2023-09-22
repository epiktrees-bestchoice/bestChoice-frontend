import React from 'react'
import style from '@/app/components/btns/btn.module.scss'
import ButtonSort from '@/app/components/btns/ButtonSort'

const RoomListSort = () => {
    // 가격순 정렬
    const handleSortRoomList = (e) => {
        const sortedList = [...fetchRoomList]
        if (e.target.value == 'asc') {
            sortedList.sort((a, b) => a.rentAllPrice - b.rentAllPrice)
        } else if (e.target.value == 'desc') {
            sortedList.sort((a, b) => b.rentAllPrice - a.rentAllPrice)
        } else if (e.target.value == 'kr') {
            sortedList.sort((a, b) => a.name.localeCompare(b.name))
        }
        setFetchRoomList(sortedList)
    }

    return (
        <div className={style.btnWrap}>
            <ButtonSort text={'거리 순'} on={true} />
            <ButtonSort text={'낮은 가격 순'} />
            <ButtonSort text={'높은 가격 순'} />
        </div>
    )
}

export default RoomListSort
