import style from '@/app/styles/RoomCata.module.scss'
import BedType from '@/app/components/catagory_component/BedType'
import DateChoice from '@/app/components/catagory_component/DateChoice'
import DetailButton from '@/app/components/catagory_component/DetailButton'
import Personnel from '@/app/components/catagory_component/Personnel'
import Price from '@/app/components/catagory_component/Price'
import DetailNoTitle from '@/app/components/catagory_component/DetailNoTitle'
import DetailTitle from '@/app/components/catagory_component/DetailTitle'
import DetailTwoLine from '@/app/components/catagory_component/DetailTwoLine'

export default function RoomCata() {
    return (
        <>
            <main className={style.background}>
                <DateChoice />
                <DetailButton />
                <DetailNoTitle />
                <Personnel />
                <Price />
                <BedType />
                <DetailTitle />
                <DetailTwoLine />
            </main>
        </>
    )
}
