import RoomCataCSS from '@/app/styles/RoomCata.module.scss'
import Bed_type from '@/app/components/catagory_component/Bed_type'
import Date_choice from '@/app/components/catagory_component/Date_choice'
import Detail_btn from '@/app/components/catagory_component/Detail_btn'
import Personnel from '@/app/components/catagory_component/Personnel'
import Price from '@/app/components/catagory_component/Price'
import Detail_no_title from '@/app/components/catagory_component/Detail_no_title'
import Detail_title from '@/app/components/catagory_component/Detail_title'
import Detail_two_line from '@/app/components/catagory_component/Detail_two_line'

export default function RoomCata() {
    return (
        <>
            <main className={RoomCataCSS.background}>
                <Date_choice />
                <Detail_btn />
                <Detail_no_title />
                <Personnel />
                <Price />
                <Bed_type />
                <Detail_title />
                <Detail_two_line />
            </main>
        </>
    )
}
