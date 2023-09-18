import SelectBox from '@/app/components/select/SelectBox'
import Tabs from '@/app/components/tabs/Tabs'
import PageTop from '@/app/layout/pageTop/page'
import RoomNav from '@/app/room/RoomNav'

export default function RoomLayout(props) {
    return (
        <div className="content">
            <PageTop title={props.params.id} children={<SelectBox />} />

            {/* <Tabs/> */}
            <RoomNav />
            {props.children}
        </div>
    )
}
