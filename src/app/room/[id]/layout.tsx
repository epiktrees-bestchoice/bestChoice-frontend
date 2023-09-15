import SelectBox from '@/app/components/select/SelectBox'
import PageTop from '@/app/layout/pageTop/page'
import Link from 'next/link'

export default function RoomLayout(props) {
    return (
        <div className="content">
            <PageTop title={props.params.id}>
                <SelectBox />
            </PageTop>

            {/* <SelectBox /> */}
            <div className="inner px-[31px] flex gap-4">
                <Link href={`/room/motel`}>모텔</Link>
                <Link href={`/room/hotel`}>호텔·리조트</Link>
                <Link href={`/room/pension`}>펜션</Link>
                <Link href={`/room/gHouse`}>게스트하우스</Link>
                <Link href={`/room/camping`}>캠핑·글램핑</Link>
            </div>
            {props.children}
        </div>
    )
}
