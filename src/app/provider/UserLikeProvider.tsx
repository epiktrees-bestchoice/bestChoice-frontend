import LikeList from '@/app/components/booking_component/LikeList'
import { IsLoginContext } from '@/app/provider/IsLoginProvider'
import { useRouter } from 'next/navigation'
import React, {
    useState,
    createContext,
    useContext,
    useEffect,
    Dispatch,
    useReducer,
} from 'react'

export type userLikeDto = {
    accommodationId: number
    userId: number
    userLikeId: number
}

type Action =
    | {
          type: 'AddLike'
          like: userLikeDto
      }
    | { type: 'RemoveLike'; like: userLikeDto }
type UserLikeDispatch = Dispatch<Action>

function reducer(userLikeList: Array<userLikeDto>, action: Action) {
    switch (action.type) {
        case 'AddLike':
            return [...userLikeList, action.like]
        case 'RemoveLike':
            if (userLikeList.includes(action.like)) {
                // 존재하는 경우에만 제거
                return userLikeList.filter((item) => item !== action.like)
            }
            return userLikeList
        default:
            return userLikeList
    }
}

export const UserLikeContext = createContext<Array<userLikeDto>>([])
export const UserLikeDispatchContext = createContext<UserLikeDispatch>(null)

const UserLikeProvider = (props) => {
    const [userLikeList, dispatch] = useReducer(reducer, [])
    const { userInfo } = useContext(IsLoginContext)

    const checkLike = async () => {
        const res = await fetch(`/api/like/checkLike?userId=${userInfo.userId}`)
        const data = await res.json()
        console.log('like context')
        console.log(data.data)
        if (data.data) {
            data.data.map((d, index) => {
                console.log(data)
                dispatch({
                    type: 'AddLike',
                    like: d,
                })
            })
        }
    }

    useEffect(() => {
        if (userInfo.userId !== undefined) {
            checkLike()
        }
    }, [userInfo])

    return (
        <UserLikeContext.Provider value={userLikeList}>
            <UserLikeDispatchContext.Provider value={dispatch}>
                {props.children}
            </UserLikeDispatchContext.Provider>
        </UserLikeContext.Provider>
    )
}

export default UserLikeProvider
