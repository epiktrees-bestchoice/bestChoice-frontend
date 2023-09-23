'use client'
import { IsLoginContext } from '@/app/provider/IsLoginProvider'
import { usePathname, useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'

const RouteGuard = ({ children }: { children: React.ReactNode }) => {
    const { isLogin } = useContext(IsLoginContext)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (!isLogin) {
            localStorage.setItem('returnUrl', pathname)
            router.push('/user')
        }
    }, [isLogin])

    if (!isLogin) {
        return null
    }

    return <>{children}</>
}
export default RouteGuard
