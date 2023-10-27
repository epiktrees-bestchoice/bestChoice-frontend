import React from 'react'

import style from '@/app/room/room.module.scss'

const RoomListEmpty = () => {
    return (
        <div className={style.roomListEmpty}>
            <span>조건에 맞는 숙소가 없습니다.</span>
            <img
                src="https://t1.daumcdn.net/cfile/tistory/9914B5435C66862111"
                alt=""
            />
        </div>
    )
}

export default RoomListEmpty
