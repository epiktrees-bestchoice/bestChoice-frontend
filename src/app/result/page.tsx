'use client'
import Sidebar from '@/app/layout/sidebar/page'
import RoomList from '@/app/result/(roomComponent)/RoomListSearch'
import RoomListSort from '@/app/room/(roomComponent)/RoomListSort'
import RoomCataSearch from '@/app/result/(roomComponent)/RoomCataSearch'

export default function Room() {
    return (
        <div className={`inner contentGrid`}>
            <Sidebar>
                <RoomCataSearch />
            </Sidebar>
            <main>
                <RoomListSort />
                {/* {fetchRoomList.length == 0 ? <RoomListEmpty /> : <RoomList />} */}
                <RoomList />
            </main>
        </div>
    )
}
