'use client'

import RoomCata from '@/app/room/RoomCata'
import RoomList from '@/app/room/RoomList'

import style from '@/app/room/room.module.scss'

export default function Room() {
    return (
        <div className={`inner ${style.room}`}>
            <div className={style.roomSide}>
                <RoomCata />
            </div>
            <RoomList />
        </div>
    )
}
