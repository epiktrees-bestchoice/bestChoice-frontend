import RoomSidebar from '@/app/layout/roomSidebar/page'
import RoomList from '@/app/room/RoomList'
import RoomListSort from '@/app/room/RoomListSort'

import style from '@/app/room/room.module.scss'

export default function Room() {
    return (
        <div className={`inner ${style.room}`}>
            <div className={style.roomSide}>
                <RoomSidebar></RoomSidebar>
            </div>
            <div>
                <RoomListSort />
                <RoomList />
            </div>
        </div>
    )
}
