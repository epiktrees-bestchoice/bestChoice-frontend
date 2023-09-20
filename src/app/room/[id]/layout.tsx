import { getCatagoryDoc } from '@/app/api/getFireBaseData'
import SelectBox from '@/app/components/select/SelectBox'
import Tabs from '@/app/components/tabs/Tabs'
import PageTop from '@/app/layout/pageTop/page'
import RoomNav from '@/app/room/RoomNav'

export default async function RoomLayout(props) {
    const roomCata = await getCatagoryDoc(props.params.id)
    const [{ name }] = roomCata

    return (
        <div className="content">
            <PageTop title={name} children={<SelectBox />} />
            <RoomNav />
            {props.children}
        </div>
    )
}
