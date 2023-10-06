import style from '@/app/styles/RoomCata.module.scss'
import BedType from '@/app/components/catagory_component/BedType'
import DateChoice from '@/app/components/catagory_component/DateChoice'
import Personnel from '@/app/components/catagory_component/Personnel'
import Price from '@/app/components/catagory_component/Price'
import CheckList from '@/app/components/catagory_component/CheckList'
import SelectBox from '@/app/components/select/SelectBox'
import ButtonDefault from '@/app/components/btns/ButtonDefault'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import KeywordsComponent from '@/app/room/(roomComponent)/CategorySide'
interface RoomCataProps {
    categoryId: number
}

export interface mtypeInterface {
    mtypeId: number
    mtypeName: string
}

export interface keywordInterface {
    id: number
    value: string
}

export default function RoomCata(props: RoomCataProps) {
    const { categoryId } = props
    const [mtypeList, setMtypeList] = useState<mtypeInterface[]>()
    const [keywordList, setKeywordList] = useState<keywordInterface[][]>()

    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        console.log(categoryId)
        const getKeyword = async () => {
            const res = await fetch(`/api/keyword?categoryId=${categoryId}`)
            const data = await res.json() // 데이터 비동기 추출
            setMtypeList(data.data.mtypeList)
            setKeywordList(data.data.keywordList)
        }
        getKeyword()
    }, [])

    const handleAddQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
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
