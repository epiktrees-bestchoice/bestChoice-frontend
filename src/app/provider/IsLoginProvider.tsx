import { useRouter } from 'next/navigation'
import React, { useState, createContext, useContext, useEffect } from 'react'

const userId =
    typeof window !== 'undefined' ? sessionStorage.getItem('id') : null
const token =
    typeof window !== 'undefined' ? sessionStorage.getItem('token') : null

export const IsLoginContext = createContext(null)

const IsLoginProvider = (props) => {
    const cookies = document.cookie.split('; ')
    const myCookie = cookies.find((cookie) => cookie.startsWith('myCookie='))
    const myCookieValue = myCookie ? myCookie.split('=')[1] : null
    const [isLogin, setInLogin] = useState(
        false,
        // userId !== null && token !== null ? false : true,
    )
    const [userInfo, setUserInfo] = useState({})
    const router = useRouter()
    const ckeckLogin = async () => {
        const res = await fetch('/api/user')
        const data = await res.json()
        if (res.status === 200 && data) {
            setInLogin(true)
            setUserInfo(data.data)
        } else {
            setInLogin(false)
            setUserInfo({})
            router.push('/')
        }
        console.log(myCookieValue)
    }
    useEffect(() => {
        ckeckLogin()
    }, [])
    return (
        <IsLoginContext.Provider
            value={{ isLogin, userInfo, setInLogin, setUserInfo }}>
            {props.children}
        </IsLoginContext.Provider>
    )
}

export default IsLoginProvider
