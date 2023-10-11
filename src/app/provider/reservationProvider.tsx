import { IsLoginContext } from '@/app/provider/IsLoginProvider'
import { createContext, useContext, useEffect, useReducer } from 'react'

export const RevervationContext = createContext(null)
const reducer = (reservationList, action) => {
    switch (action.type) {
        case 'AddReservation':
            return [...reservationList, action.reservation]
        case 'RemoveReservation':
            return reservationList.filter(
                (item) => item.reserveId !== action.reserveId,
            )
        default:
            return reservationList
    }
}
const ReservationProvider = (props) => {
    const [reservationList, dispatch] = useReducer(reducer, [])
    const { userInfo } = useContext(IsLoginContext)

    const checkReservation = async () => {
        const res = await fetch(`/api/reserve/checkReserve/${userInfo.userId}`)
        const data = await res.json()
        if (data.data) {
            data.data.map((item) => {
                dispatch({
                    type: 'AddReservation',
                    reservation: item,
                })
            })
        }
    }

    useEffect(() => {
        if (userInfo.userId !== undefined) {
            checkReservation()
        }
    }, [userInfo])

    return (
        <RevervationContext.Provider value={{ reservationList, dispatch }}>
            {props.children}
        </RevervationContext.Provider>
    )
}

export default ReservationProvider
