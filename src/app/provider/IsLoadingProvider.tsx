import Loading from '@/app/loading'
import React, { createContext, useState } from 'react'

export const IsLoadingContext = createContext(null)
const IsLoadingProvider = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <IsLoadingContext.Provider value={[isLoading, setIsLoading]}>
            {isLoading ? <Loading /> : <>{props.children}</>}
        </IsLoadingContext.Provider>
    )
}

export default IsLoadingProvider
