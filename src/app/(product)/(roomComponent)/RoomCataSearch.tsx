import style from '@/app/styles/RoomCata.module.scss'
import BedType from '@/app/components/catagory/BedType'
import DateChoice from '@/app/components/catagory/DateChoice'
import Personnel from '@/app/components/catagory/Personnel'
import Price from '@/app/components/catagory/Price'
import CheckList from '@/app/components/catagory/CheckList'
import SelectBox from '@/app/components/select/SelectBox'
import ButtonDefault from '@/app/components/btns/ButtonDefault'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import KeywordsComponent from '@/app/(product)/(roomComponent)/RoomCatagoryKeyword'

export interface mtypeInterface {
    mtypeId: number
    mtypeName: string
}

export interface keywordInterface {
    keywordId: number
    keywordName: string
}

export default function RoomCataSearch() {
    // const [mtypeList, setMtypeList] = useState<mtypeInterface[]>()
    const mtypeList = [
        {
            mtypeId: 1,
            mtypeName: '숙소유형',
        },
    ]
    // const [keywordList, setKeywordList] = useState<keywordInterface[][]>()
    const keywordList = [
        [
            {
                keywordId: 1,
                keywordName: 'HOTEL',
            },
            {
                keywordId: 2,
                keywordName: 'MOTEL',
            },
            {
                keywordId: 3,
                keywordName: 'PENSION',
            },
            {
                keywordId: 4,
                keywordName: 'GESTHOUSE',
            },
            {
                keywordId: 5,
                keywordName: 'CAMPING',
            },
        ],
    ]

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
        //router.push(`${pathname}?${params.toString()}`)
        console.log(e)
    }
    const handleResetQuery = () => {
        router.push(`${pathname}`)
    }

    return (
        <>
            <main className={style.background}>
                <div className={`${style.roomFilter}`}>
                    <h3>날짜</h3>
                    <DateChoice />
                </div>
                <div className={`${style.roomFilter} ${style.region}`}>
                    <h3>지역</h3>
                    <SelectBox />
                </div>
                <div className={`${style.roomFilter} ${style.set}`}>
                    <h3>상세조건</h3>
                    <ButtonDefault style="sub" onClick={handleResetQuery}>
                        초기화
                    </ButtonDefault>
                    <ButtonDefault>적용</ButtonDefault>
                </div>
                <KeywordsComponent
                    mtypeList={mtypeList}
                    keywordList={keywordList}
                    handleAddQuery={handleAddQuery}
                />

                <div className={`${style.roomFilter} ${style.cntPeople}`}>
                    <h3>인원</h3>
                    <Personnel />
                </div>
                <div className={`${style.roomFilter}`}>
                    <Price />
                </div>
                <div className={`${style.roomFilter}`}>
                    <h3>베드타입</h3>
                    <BedType />
                </div>
            </main>
        </>
    )
}
