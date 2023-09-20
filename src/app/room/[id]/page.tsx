'use client'

import Sidebar from '@/app/layout/sidebar/page'
import RoomCata from '@/app/room/RoomCata'
import RoomList from '@/app/room/RoomList'
import RoomListSort from '@/app/room/RoomListSort'

import style from '@/app/room/room.module.scss'
import {
    useParams,
    usePathname,
    useRouter,
    useSearchParams,
} from 'next/navigation'

export default function Room() {
    const router = useRouter()
    const pathname = usePathname()

    const handleAddQuery = (e) => {
        const target = e.target
        const queryName = target.name
        const queryValue = target.value
        const params = new URLSearchParams(window.location.search)
        if (target.checked) {
            params.append(queryName, queryValue)
        } else {
            params.delete(queryName)
        }
        router.push(`${pathname}?${params.toString()}`)
    }
    return (
        <div className={`inner contentGrid`}>
            <Sidebar>
                <label htmlFor="re">예약가능</label>
                <input
                    id="re"
                    type="checkbox"
                    name="detailOpt1"
                    value="reservation"
                    onChange={(e) => handleAddQuery(e)}
                />
                <label htmlFor="de">50% 할인</label>
                <input
                    id="de"
                    type="checkbox"
                    name="detailOpt2"
                    value="discount"
                    onChange={(e) => handleAddQuery(e)}
                />

                {/* <button onClick={handleAddQuery('button')}>버튼</button> */}
                <RoomCata />
            </Sidebar>
            <div>
                <RoomListSort />
                <RoomList />
            </div>
        </div>
    )
}
