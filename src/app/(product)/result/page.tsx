'use client'
import Sidebar from '@/app/layout/sidebar/page'
import RoomCataSearch from '@/app/(product)/(roomComponent)/RoomCataSearch'
import RoomListSort from '@/app/(product)/(roomComponent)/(list)/RoomListSort'
import RoomListSearch from '@/app/(product)/(roomComponent)/(list)/RoomListSearch'

export default function Room() {
    return (
        <div className={`inner contentGrid`}>
            <Sidebar>
                <RoomCataSearch />
            </Sidebar>
            <main>
                <RoomListSort />
                {/* {fetchRoomList.length == 0 ? <RoomListEmpty /> : <RoomList />} */}
                <RoomListSearch />
            </main>
        </div>
    )
}
