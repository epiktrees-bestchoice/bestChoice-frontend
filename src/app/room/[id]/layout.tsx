import SelectBox from '@/app/components/select/SelectBox'
import PageTop from '@/app/layout/pageTop/page'
import RoomNav from '@/app/room/RoomNav'
import Link from 'next/link'

export default function RoomLayout(props) {
    return (
        <div className="content">
            <PageTop title={props.params.id}>
                <SelectBox />
            </PageTop>
            <RoomNav />
            {props.children}
        </div>
    )
}
