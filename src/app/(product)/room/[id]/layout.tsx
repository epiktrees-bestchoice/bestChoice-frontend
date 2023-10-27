import { roomCata } from '@/app/components/HomeCata'
import PageTop from '@/app/layout/pageTop/page'
import RoomNav from '@/app/(product)/(roomComponent)/RoomNav'

export default function RoomLayout(props) {
    const params = props.params.id
    const [data] = roomCata.filter((item) => item.type == params)
    return (
        <div className="content">
            <PageTop title={data.name} />
            <RoomNav props={roomCata} params={params} />
            {props.children}
        </div>
    )
}
