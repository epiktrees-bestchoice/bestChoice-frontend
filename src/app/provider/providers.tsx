'use client'
import IsLoginProvider from '@/app/provider/IsLoginProvider'
import { StyledEngineProvider } from '@mui/material'

export default function Providers({ children }) {
    return (
        <StyledEngineProvider injectFirst>
            <IsLoginProvider>{children}</IsLoginProvider>
        </StyledEngineProvider>
    )
}
