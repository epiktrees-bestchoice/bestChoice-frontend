import { useRouter } from 'next/navigation'
import React, { useState, createContext, useContext, useEffect } from 'react'

const userId =
    typeof window !== 'undefined' ? sessionStorage.getItem('id') : null
const token =
    typeof window !== 'undefined' ? sessionStorage.getItem('token') : null

export const IsLoginContext = createContext(null)

const IsLoginProvider = (props) => {
    const [isLogin, setInLogin] = useState(
        false,
        // userId !== null && token !== null ? false : true,
    )
    const [userInfo, setUserInfo] = useState({})
    const router = useRouter()
    const checkLogin = async () => {
        const res = await fetch('/api/user')
        const data = await res.json()
        if (res.status === 200 && data) {
            setInLogin(true)
            setUserInfo(data.data)
        } else {
            setInLogin(false)
            setUserInfo({})
            // router.push('/')
        }
        console.log(data)
    }
    useEffect(() => {
        checkLogin()
    }, [])
    return (
        <IsLoginContext.Provider
            value={{ isLogin, userInfo, setInLogin, setUserInfo }}>
            {props.children}
        </IsLoginContext.Provider>
    )
}

export default IsLoginProvider
