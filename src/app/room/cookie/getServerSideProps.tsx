import RoomDetailPage from '@/app/room/detail/[id]/page'
import { cookies } from 'next/headers'

export async function getServerSideProps() {
    const cookieStore = cookies()
    const token = cookieStore.get('JSESSIONID')
    console.log(token)

    return <></>
}
