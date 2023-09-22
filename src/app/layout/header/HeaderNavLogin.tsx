import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import style from '@/app/layout/header/header.module.scss'
import Link from 'next/link'
export const loginNavLinks = [
    // path 수정 필요 - 20230825 by oliv (수정 완료시 주석 삭제)
    {
        name: '숙소찾기',
        path: '/room/1',
    },
    {
        name: '예약내역',
        path: '/my/reservations',
    },
    {
        name: '더보기',
        path: '',
        sub: [
            {
                name: '공지사항',
                path: '/more/notice',
            },
            {
                name: '이벤트',
                path: '/more/event',
            },
            {
                name: '1:1문의',
                path: '/more/inquiry',
            },
        ],
    },
    {
        name: '내정보',
        path: '',
        sub: [
            {
                name: '내정보',
                path: '/my/mypage',
            },
            {
                name: '예약내역',
                path: '/my/reservations',
            },
            {
                name: '좋아요',
                path: '/my/likes',
            },
        ],
    },
]
const HeaderNavLogin = () => {
    return (
        <>
            {loginNavLinks.map((link, idx) => {
                if (link.path !== '') {
                    return (
                        <li key={idx}>
                            <Link
                                href={link.path}
                                className={style.gnbCataLink}>
                                {link.name}
                            </Link>
                        </li>
                    )
                } else {
                    return (
                        <li key={idx}>
                            <span className={style.gnbCataLink}>
                                {link.name == '내정보' ? (
                                    <>
                                        <span className={style.user}>
                                            <img
                                                src="https://image.goodchoice.kr/profile/ico/ico_21.png"
                                                width="30"
                                                height="30"
                                                alt=""
                                            />
                                            <ArrowDropDownIcon />
                                        </span>
                                        <ul className={style.gnbCataSub}>
                                            <b className={style.userName}>
                                                유저네임
                                            </b>
                                            {link.sub.map((subLink, subIdx) => {
                                                return (
                                                    <li key={subIdx}>
                                                        <Link
                                                            href={subLink.path}>
                                                            {subLink.name}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </>
                                ) : (
                                    <>
                                        {link.name}
                                        <ul className={style.gnbCataSub}>
                                            {link.sub.map((subLink, subIdx) => {
                                                return (
                                                    <li key={subIdx}>
                                                        <Link
                                                            href={subLink.path}>
                                                            {subLink.name}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </>
                                )}
                            </span>
                        </li>
                    )
                }
            })}
        </>
    )
}

export default HeaderNavLogin
