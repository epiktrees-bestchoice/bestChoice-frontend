'use client'
import IsLoginProvider from '@/app/provider/IsLoginProvider'
import RoomListContext from '@/app/provider/roomListProvider'
import UserLikeProvider from '@/app/provider/UserLikeProvider'
import { StyledEngineProvider } from '@mui/material'

export default function Providers({ children }) {
    return (
        <StyledEngineProvider injectFirst>
            <IsLoginProvider>
                <UserLikeProvider>
                    <RoomListContext>{children}</RoomListContext>
                </UserLikeProvider>
            </IsLoginProvider>
        </StyledEngineProvider>
    )
}
