'use client'

import Sidebar from '@/app/layout/sidebar/page'
import RoomList from '@/app/room/(roomComponent)/RoomList'
import RoomListSort from '@/app/room/(roomComponent)/RoomListSort'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useContext, useEffect, useRef } from 'react'
import { RoomListContext } from '@/app/provider/roomListProvider'
import RoomCataSearch from '@/app/result/(roomComponent)/RoomCataSearch'

export default function Room({ params }: { params: { searchText: string } }) {
    console.log(decodeURIComponent(params.searchText))
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
