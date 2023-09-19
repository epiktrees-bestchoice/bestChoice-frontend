import React from 'react'

import Sidebar from '@/app/layout/sidebar/page'
import SideBarNav from '@/app/layout/sidebar/SideBarNav'
import MyPage from '@/app/my/mypage/MyPage'
import MyReservations from '@/app/my/reservations/MyResevations'

const More = (props) => {
    const param = props.params.id
    const myPages = [
        { path: 'reservations', name: '예약 내역' },
        { path: 'mypage', name: '내 정보 관리' },
    ]
    return (
        <div className={`inner contentGrid narrow`}>
            <Sidebar className="nav">
                {myPages.map((page, index) => (
                    <SideBarNav
                        key={index}
                        param={param}
                        path={page.path}
                        href={`/my/${page.path}`}
                        name={page.name}
                    />
                ))}
            </Sidebar>
            <>
                {param == 'reservations' && <MyReservations />}
                {param == 'mypage' && <MyPage />}
            </>
        </div>
    )
}

export default More
