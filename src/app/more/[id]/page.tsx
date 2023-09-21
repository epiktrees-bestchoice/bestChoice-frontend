import React from 'react'
import Link from 'next/link'

import Sidebar from '@/app/layout/sidebar/page'
import Inquiry from '@/app/more/inquiry/inquiry'
import style from '@/app/more/more.module.scss'
import SideBarNav from '@/app/layout/sidebar/SideBarNav'
import MoreEvent from '@/app/more/MoreEvent'

const More = (props) => {
    const param = props.params.id
    const morePages = [
        { path: 'notice', name: '공지사항' },
        { path: 'event', name: '이벤트' },
        { path: 'inquiry', name: '1:1문의' },
    ]
    return (
        <div className={`inner contentGrid narrow`}>
            <Sidebar className="nav">
                {morePages.map((page, index) => (
                    <SideBarNav
                        key={index}
                        param={param}
                        path={page.path}
                        href={`/more/${page.path}`}
                        name={page.name}
                    />
                ))}
            </Sidebar>
            <>
                {param == 'notice' && <div>notice</div>}
                {param == 'event' && <MoreEvent />}
                {param == 'inquiry' && <Inquiry />}
            </>
        </div>
    )
}

export default More
