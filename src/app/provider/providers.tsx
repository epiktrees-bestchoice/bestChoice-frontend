'use client'
import IsLoginProvider from '@/app/provider/IsLoginProvider'
import ReservationProvider from '@/app/provider/reservationProvider'
import RoomListContext from '@/app/provider/roomListProvider'
import UserLikeProvider from '@/app/provider/UserLikeProvider'
import { StyledEngineProvider } from '@mui/material'

export default function Providers({ children }) {
    return (
        <StyledEngineProvider injectFirst>
            <IsLoginProvider>
                <UserLikeProvider>
                    <ReservationProvider>
                        <RoomListContext>{children}</RoomListContext>
                    </ReservationProvider>
                </UserLikeProvider>
            </IsLoginProvider>
        </StyledEngineProvider>
    )
}
