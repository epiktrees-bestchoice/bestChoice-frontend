import React, { createContext, useState } from 'react'

export const RoomListContext = createContext<any | null>(null)

const RoomListProvider = (props) => {
    const [fetchRoomList, setFetchRoomList] = useState([])
    return (
        <RoomListContext.Provider value={{ fetchRoomList, setFetchRoomList }}>
            {props.children}
        </RoomListContext.Provider>
    )
}

export default RoomListProvider
