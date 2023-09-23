import React, { useMemo, useState, createContext, useContext } from 'react'

const userId =
    typeof window !== 'undefined' ? sessionStorage.getItem('id') : null
const token =
    typeof window !== 'undefined' ? sessionStorage.getItem('token') : null

export const IsLoginContext = createContext({
    isLogin: userId !== null && token !== null ? true : false,
})

const IsLoginProvider = (props) => {
    const [isLogin, setInLogin] = useState(
        userId !== null && token !== null ? true : false,
    )
    const value = useMemo(
        () => ({ isLogin, setInLogin }),
        [isLogin, setInLogin],
    )
    return (
        <IsLoginContext.Provider value={value}>
            {props.children}
        </IsLoginContext.Provider>
    )
}

// 로그인 상태를 확인 하는 커스텀 훅
export function useIsLoginState() {
    const context = useContext(IsLoginContext)
    if (!context) {
        throw new Error('Cannot find IsLoginProvider')
    }
    return context.isLogin
}

export default IsLoginProvider
