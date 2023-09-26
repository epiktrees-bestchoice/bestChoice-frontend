import React, { useContext } from 'react'
import style from '@/app/components/btns/btn.module.scss'
import ButtonSort from '@/app/components/btns/ButtonSort'
import { RoomListContext } from '@/app/provider/roomListProvider'

const RoomListSort = () => {
    const { fetchRoomList, setFetchRoomList } = useContext(RoomListContext)

    // 가격순 정렬
    const sortButton = [
        { value: 'asc', text: '낮은 가격 순' },
        { value: 'desc', text: '높은 가격 순' },
        { value: 'kr', text: '가나다 순' },
    ]
    const handleSortRoomList = (e) => {
        const sortedList = [...fetchRoomList]
        const value = e.target.value
        const buttons = e.target.parentElement.childNodes
        buttons.forEach((button) => button.classList.remove(style['on']))
        if (value == 'asc') {
            sortedList.sort((a, b) => a.price - b.price)
        } else if (value == 'desc') {
            sortedList.sort((a, b) => b.price - a.price)
        } else if (value == 'kr') {
            sortedList.sort((a, b) =>
                a.accommodationName.localeCompare(b.accommodationName),
            )
        }
        e.target.classList.add(style['on'])
        setFetchRoomList(sortedList)
    }

    return (
        <div className={style.btnWrap}>
            {sortButton.map((button, index) => {
                return (
                    <ButtonSort
                        key={index}
                        name="ButtonSort"
                        value={button.value}
                        text={button.text}
                        onClick={handleSortRoomList}
                    />
                )
            })}
        </div>
    )
}

export default RoomListSort
