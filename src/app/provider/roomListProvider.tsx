import { getRoomList } from '@/app/api/getFireBaseData'
import React, { createContext, useEffect, useMemo, useState } from 'react'

export const RoomListContext = createContext<any | null>(null)

const RoomListProvider = (props) => {
    const [fetchRoomList, setFetchRoomList] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await getRoomList()
            setFetchRoomList(data)
        }
        fetchData()
    }, [])
    return (
        <RoomListContext.Provider value={{ fetchRoomList, setFetchRoomList }}>
            {props.children}
        </RoomListContext.Provider>
    )
}

export default RoomListProvider
