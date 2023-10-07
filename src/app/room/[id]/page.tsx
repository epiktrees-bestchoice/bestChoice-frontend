'use client'

import Sidebar from '@/app/layout/sidebar/page'
import RoomList from '@/app/room/(roomComponent)/RoomList'
import RoomListSort from '@/app/room/(roomComponent)/RoomListSort'

import { getRoomList } from '@/app/api/getFireBaseData'
import { NextResponse } from 'next/server'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useContext, useEffect, useRef } from 'react'
import { RoomListContext } from '@/app/provider/roomListProvider'
import RoomListEmpty from '@/app/room/(roomComponent)/RoomListEmpty'
import RoomCata from '@/app/room/(roomComponent)/RoomCata'

export default function Room({ params }: { params: { id: number } }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const { fetchRoomList, setFetchRoomList } = useContext(RoomListContext)

    // useEffect(() => {
    //     const valuesArray = Array.from(searchParams.values())
    //     const fetchData = async () => {
    //         const res = await fetch('/api/hello', { method: 'GET' })
    //         const data = await res.json()
    //         console.log(data)
    //         if (valuesArray.length > 0) {
    //             const arr = data.filter((v) => {
    //                 return valuesArray.every((a) => v['detailOpt'].includes(a))
    //             })
    //             setFetchRoomList(arr)
    //         } else {
    //             setFetchRoomList(data)
    //         }
    //     }
    //     fetchData()
    // }, [searchParams])

    return (
        <div className={`inner contentGrid`}>
            <Sidebar>
                <RoomCata categoryId={params.id} />
            </Sidebar>
            <main>
                <RoomListSort />
                {/* {fetchRoomList.length == 0 ? <RoomListEmpty /> : <RoomList />} */}
                <RoomList />
            </main>
        </div>
    )
}
