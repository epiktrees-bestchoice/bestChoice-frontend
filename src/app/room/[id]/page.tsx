'use client'

import Sidebar from '@/app/layout/sidebar/page'
import RoomCata from '@/app/room/RoomCata'
import RoomList from '@/app/room/RoomList'
import RoomListSort from '@/app/room/RoomListSort'

import style from '@/app/room/room.module.scss'

export default function Room() {
    return (
        <div className={`inner contentGrid`}>
            <Sidebar>
                <RoomCata />
            </Sidebar>
            <div>
                <RoomListSort />
                <RoomList />
            </div>
        </div>
    )
}
