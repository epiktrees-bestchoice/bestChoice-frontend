'use client'

import { getRoomList } from '@/app/api/getFireBaseData'
import Sidebar from '@/app/layout/sidebar/page'
import RoomCata from '@/app/room/RoomCata'
import RoomList from '@/app/room/RoomList'
import RoomListSort from '@/app/room/RoomListSort'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Room() {
    const router = useRouter()
    const pathname = usePathname()
    const [fetchRoomList, setFetchRoomList] = useState([])
    const searchParams = useSearchParams()

    useEffect(() => {
        const valuesArray = Array.from(searchParams.values())
        const fetchData = async () => {
            const data = await getRoomList()
            if (valuesArray.length > 0) {
                const arr = data.filter((v) => {
                    return valuesArray.every((a) => v['detailOpt'].includes(a))
                })
                setFetchRoomList(arr)
            } else {
                setFetchRoomList(data)
            }
        }
        fetchData()
    }, [searchParams])

    const handleAddQuery = (e) => {
        const target = e.target
        const queryName = target.name
        const queryValue = target.value
        const params = new URLSearchParams(window.location.search)
        if (target.checked) {
            params.append(queryName, queryValue)
        } else {
            params.delete(queryName)
        }
        router.push(`${pathname}?${params.toString()}`)
    }

    return (
        <div className={`inner contentGrid`}>
            <Sidebar>
                <label htmlFor="re">스파</label>
                <input
                    id="re"
                    type="checkbox"
                    name="detailOpt1"
                    value="spa"
                    onChange={(e) => handleAddQuery(e)}
                />
                <label htmlFor="de">50% 할인</label>
                <input
                    id="de"
                    type="checkbox"
                    name="detailOpt2"
                    value="discount"
                    onChange={(e) => handleAddQuery(e)}
                />
                <label htmlFor="de">수영장</label>
                <input
                    id="de"
                    type="checkbox"
                    name="detailOpt3"
                    value="pool"
                    onChange={(e) => handleAddQuery(e)}
                />
                <RoomCata />
            </Sidebar>
            <div>
                <RoomListSort />
                <RoomList fetchRoomList={fetchRoomList} />
            </div>
        </div>
    )
}
