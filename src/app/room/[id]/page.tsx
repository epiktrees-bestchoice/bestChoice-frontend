'use client'

import { getRoomList } from '@/app/api/getFireBaseData'
import ButtonSort from '@/app/components/btns/ButtonSort'
import Sidebar from '@/app/layout/sidebar/page'
import RoomCata from '@/app/room/RoomCata'
import RoomList from '@/app/room/RoomList'
import RoomListSort from '@/app/room/RoomListSort'
import style from '@/app/components/btns/btn.module.scss'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Room() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [fetchRoomList, setFetchRoomList] = useState([])

    useEffect(() => {
        const valuesArray = Array.from(searchParams.values())
        const fetchData = async () => {
            const data = await getRoomList()
            if (valuesArray.length > 0) {
                const arr = data.filter((v) => {
                    return valuesArray.every((a) => v['detailOpt'].includes(a))
                })
                setFetchRoomList(arr)
            } else {
                setFetchRoomList(data)
            }
        }
        fetchData()
    }, [searchParams])

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

    // 가격순 정렬
    const sortButton = [
        { value: 'asc', text: '낮은 가격 순' },
        { value: 'desc', text: '높은 가격 순' },
        { value: 'kr', text: '가나다 순' },
    ]
    const handleSortRoomList = (e) => {
        const sortedList = [...fetchRoomList]
        const value = e.target.value
        const buttons = e.target.parentElement.childNodes

        buttons.forEach((button) => button.classList.remove(style['on']))

        if (value == 'asc') {
            sortedList.sort((a, b) => a.rentAllPrice - b.rentAllPrice)
        } else if (value == 'desc') {
            sortedList.sort((a, b) => b.rentAllPrice - a.rentAllPrice)
        } else if (value == 'kr') {
            sortedList.sort((a, b) => a.name.localeCompare(b.name))
        }
        e.target.classList.add(style['on'])
        setFetchRoomList(sortedList)
    }

    return (
        <div className={`inner contentGrid`}>
            <Sidebar>
                <label htmlFor="re">스파</label>
                <input
                    id="re"
                    type="checkbox"
                    name="detailOpt1"
                    value="spa"
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
                <label htmlFor="de">수영장</label>
                <input
                    id="de"
                    type="checkbox"
                    name="detailOpt3"
                    value="pool"
                    onChange={(e) => handleAddQuery(e)}
                />
                <RoomCata />
            </Sidebar>
            <div>
                <div className={style.btnWrap}>
                    {sortButton.map((button, index) => {
                        return (
                            <ButtonSort
                                key={index}
                                name="ButtonSort"
                                value={button.value}
                                text={button.text}
                                onClick={handleSortRoomList}
                            />
                        )
                    })}
                </div>
                <RoomList fetchRoomList={fetchRoomList} />
            </div>
        </div>
    )
}
