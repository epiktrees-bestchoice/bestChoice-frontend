import { useRouter } from 'next/navigation'
import React, { useState, createContext, useContext, useEffect } from 'react'

const userId =
    typeof window !== 'undefined' ? sessionStorage.getItem('id') : null
const token =
    typeof window !== 'undefined' ? sessionStorage.getItem('token') : null

export const IsLoginContext = createContext(null)

const IsLoginProvider = (props) => {
    const [isLogin, setInLogin] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const router = useRouter()
    const ckeckLogin = async () => {
        const res = await fetch('/api/user')
        const data = await res.json()
        if (isLogin && res.status === 200) {
            // setInLogin(true)
            setUserInfo(data.data)
        } else {
            // setInLogin(false)
            setUserInfo({})
            router.push('/')
        }
    }
    useEffect(() => {
        const cookies = document.cookie
        const myCookie = cookies.includes('JSESSIONID')
            ? cookies.split('=')[1]
            : null

        console.log(myCookie)
        setInLogin(myCookie !== null ? true : false)
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
