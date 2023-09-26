'use client'
import { IsLoginContext } from '@/app/provider/IsLoginProvider'
import { usePathname, useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'

const RouteGuard = ({ children }: { children: React.ReactNode }) => {
    const { isLogin, userInfo } = useContext(IsLoginContext)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (!isLogin) {
            localStorage.setItem('returnUrl', pathname)
            router.push('/user')
        }
    }, [isLogin])

    if (!isLogin && userInfo == null) {
        return <></>
    }

    return <>{children}</>
}
export default RouteGuard
