import React from 'react'
import style from '@/app/my/mypage/mypage.module.scss'

export default function SideBar() {
    return (
        <nav className={style.sideBar}>
            <ul>
                <li className={style.list}>
                    <a href="/" className={style.a}>
                        예약 내역
                    </a>
                </li>
                <li className={style.list}>
                    <a href="/" className={style.a}>
                        내 정보 관리
                    </a>
                </li>
            </ul>
        </nav>
    )
}
