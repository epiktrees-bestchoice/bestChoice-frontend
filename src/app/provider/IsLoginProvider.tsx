import React, { useState, createContext, useContext, useEffect } from 'react'

export const IsLoginContext = createContext(null)

const IsLoginProvider = (props) => {
    const [isLogin, setInLogin] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const fetchUserData = async () => {
        const res = await fetch('/api/user')
        const data = await res.json()
        if (res.status == 200 && data) {
            setUserInfo(data.data)
        } else {
            setUserInfo({})
        }
    }
    useEffect(() => {
        const cookies = document.cookie
        const myCookie = cookies.includes('JSESSIONID')
            ? cookies.split('=')[1]
            : null
        const hello = myCookie !== null ? true : false
        setInLogin(hello)
        if (hello) {
            fetchUserData()
        }
    }, [])

    return (
        <IsLoginContext.Provider
            value={{ isLogin, userInfo, setInLogin, setUserInfo }}>
            {props.children}
        </IsLoginContext.Provider>
    )
}

export default IsLoginProvider
