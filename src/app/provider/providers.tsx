'use client'
import IsLoginProvider from '@/app/provider/IsLoginProvider'
import RoomListContext from '@/app/provider/roomListProvider'
import { StyledEngineProvider } from '@mui/material'

export default function Providers({ children }) {
    return (
        <StyledEngineProvider injectFirst>
            <IsLoginProvider>
                <RoomListContext>{children}</RoomListContext>
            </IsLoginProvider>
        </StyledEngineProvider>
    )
}
