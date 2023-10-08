import LikeList from '@/app/components/booking_component/LikeList'
import { useRouter } from 'next/navigation'
import React, {
    useState,
    createContext,
    useContext,
    useEffect,
    Dispatch,
    useReducer,
} from 'react'

const userId =
    typeof window !== 'undefined' ? sessionStorage.getItem('id') : null
const token =
    typeof window !== 'undefined' ? sessionStorage.getItem('token') : null

type Action =
    | {
          type: 'AddLike'
          accommodationId: number
      }
    | { type: 'RemoveLike'; accommodationId: number }
type UserLikeDispatch = Dispatch<Action>

function reducer(state: Array<number>, action: Action) {
    switch (action.type) {
        case 'AddLike':
            if (!state.includes(action.accommodationId)) {
                // 존재하지 않은 경우에만 추가
                return [...state, action.accommodationId]
            }
            return state
        case 'RemoveLike':
            if (state.includes(action.accommodationId)) {
                // 존재하는 경우에만 제거
                return state.filter((item) => item !== action.accommodationId)
            }
            return state
        default:
            return state
    }
}

export const UserLikeContext = createContext<Array<number>>([])
export const UserLikeDispatchContext = createContext<UserLikeDispatch>(null)

export type UserLikeDto = {
    accommodationId: number
}

const UserLikeProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, [])

    useEffect(() => {})

    return (
        <UserLikeContext.Provider value={state}>
            <UserLikeDispatchContext.Provider value={dispatch}>
                {props.children}
            </UserLikeDispatchContext.Provider>
        </UserLikeContext.Provider>
    )
}

export default UserLikeProvider
