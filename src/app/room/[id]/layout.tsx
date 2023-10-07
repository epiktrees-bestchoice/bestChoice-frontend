import { getCatagoryDoc } from '@/app/api/getFireBaseData'
import SelectBox from '@/app/components/select/SelectBox'
import PageTop from '@/app/layout/pageTop/page'
import RoomNav from '@/app/room/(roomComponent)/RoomNav'

export default async function RoomLayout(props) {
    const params = props.params.id
    const roomCata = await getCatagoryDoc()
    const [data] = roomCata.filter((item) => item.id == params)
    return (
        <div className="content">
            <PageTop title={data.name} />
            <RoomNav props={roomCata} params={params} />
            {props.children}
        </div>
    )
}
