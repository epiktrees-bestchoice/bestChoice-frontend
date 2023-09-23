'use client'

import React, { useContext, useEffect } from 'react'
import PageTop from '@/app/layout/pageTop/page'
import { IsLoginContext } from '@/app/provider/IsLoginProvider'
import { usePathname, useRouter } from 'next/navigation'

const Mylayout = (props) => {
    const { isLogin } = useContext(IsLoginContext)
    const router = useRouter()
    const pathname = usePathname()
    useEffect(() => {
        if (!isLogin) {
            console.log('실패')
            localStorage.setItem('returnUrl', pathname)
            router.push('/user')
        }
    }, [])
    return (
        <div className="content">
            <PageTop title="내정보" />
            {props.children}
        </div>
    )
}

export default Mylayout
