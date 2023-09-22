import style from '@/app/styles/RoomCata.module.scss'
import BedType from '@/app/components/catagory_component/BedType'
import DateChoice from '@/app/components/catagory_component/DateChoice'
import Personnel from '@/app/components/catagory_component/Personnel'
import Price from '@/app/components/catagory_component/Price'
import CheckList from '@/app/components/catagory_component/CheckList'
import SelectBox from '@/app/components/select/SelectBox'
import ButtonDefault from '@/app/components/btns/ButtonDefault'

export default function RoomCata() {
    const info = [
        {
            isTitle: false,
            title: '',

            isGrid: false,
        },
        {
            isTitle: true,
            title: '호텔 유형',

            isGrid: false,
        },
        {
            isTitle: true,
            title: '이색 테마',

            isGrid: true,
        },
    ]

    const list1 = [
        {
            id: 'motel1',
            title: '5성급',
        },
        {
            id: 'motel2',
            title: '4성급',
        },
        {
            id: 'motel3',
            title: '3성급',
        },
        {
            id: 'motel4',
            title: '2성급',
        },
    ]
    const list2 = [
        {
            id: 'motel5',
            title: '무인텔',
        },
        {
            id: 'motel6',
            title: '파티룸',
        },
        {
            id: 'motel7',
            title: '거울룸',
        },
        {
            id: 'motel8',
            title: '복층룸',
        },
        {
            id: 'motel9',
            title: '공주룸',
        },
    ]
    const list3 = [
        {
            id: 'motel10',
            title: '피트니스',
        },
        {
            id: 'motel11',
            title: '사우나',
        },
        {
            id: 'motel12',
            title: '주방',
        },
        {
            id: 'motel13',
            title: '건조기',
        },
        {
            id: 'motel14',
            title: '세탁기',
        },
    ]

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
                    <ButtonDefault style="sub">초기화</ButtonDefault>
                    <ButtonDefault>적용</ButtonDefault>
                </div>
                <div className={`${style.roomFilter}`}>
                    <CheckList info={info[0]} list={list3} />
                </div>
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
                <div className={`${style.roomFilter}`}>
                    <CheckList info={info[1]} list={list1} />
                </div>
                <div className={`${style.roomFilter}`}>
                    <CheckList info={info[2]} list={list2} />
                </div>
            </main>
        </>
    )
}
