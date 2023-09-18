import React from 'react'
import Link from 'next/link'

import Sidebar from '@/app/layout/sidebar/page'
import Inquiry from '@/app/more/inquiry/page'
import style from '@/app/more/more.module.scss'

const More = (props) => {
    const param = props.params.id
    const morePages = [
        { path: 'notice', name: '공지사항' },
        { path: 'event', name: '이벤트' },
        { path: 'inq', name: '1:1문의' },
    ]
    return (
        <div className={`inner contentGrid more`}>
            <Sidebar className={style.nav}>
                {morePages.map((page, index) => (
                    <Link
                        key={index}
                        className={`${
                            param === page.path
                                ? style.navItemOn
                                : style.navItem
                        }`}
                        href={`/more/${page.path}`}>
                        {page.name}
                    </Link>
                ))}
            </Sidebar>
            <>
                {param == 'notice' && <div>notice</div>}
                {param == 'event' && <div>event</div>}
                {param == 'inq' && <Inquiry />}
            </>
        </div>
    )
}

export default More
