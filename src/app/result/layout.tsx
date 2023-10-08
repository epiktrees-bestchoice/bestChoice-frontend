import { getCatagoryDoc } from '@/app/api/getFireBaseData'
import SelectBox from '@/app/components/select/SelectBox'
import PageTop from '@/app/layout/pageTop/page'
import RoomNav from '@/app/room/(roomComponent)/RoomNav'

export default async function RoomLayout(props) {
    const roomCata = await getCatagoryDoc()

    return (
        <div className="content">
            <PageTop />
            {/* <RoomNav props={roomCata} params={params} /> */}
            {props.children}
        </div>
    )
}
