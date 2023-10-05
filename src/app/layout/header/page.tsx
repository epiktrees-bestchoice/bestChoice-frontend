'use client'

import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { IsLoginContext } from '@/app/provider/IsLoginProvider'

import SearchIcon from '@mui/icons-material/Search'
import SrchBar from '@/app/components/SrchBar'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import style from '@/app/layout/header/header.module.scss'

const Header = () => {
    const pathname = usePathname()
    const headerRef = useRef(null)
    const { isLogin, userInfo } = useContext(IsLoginContext)

    // 스크롤시 header 스타일 변경
    useEffect(() => {
        const stickyHeader = () => {
            if (
                window.scrollY > 60 ||
                document.documentElement.scrollTop > 60
            ) {
                headerRef.current.classList.add(style['scroll'])
            } else {
                headerRef.current.classList.remove(style['scroll'])
            }
        }
        window.addEventListener('scroll', stickyHeader)
        return () => {
            window.removeEventListener('scroll', stickyHeader)
        }
    }, [])

    // 클릭시 검색바 show & hide
    const [srchBarOpen, setsrchBarOpen] = useState(false)
    const handleSrchBar = () => {
        setsrchBarOpen(!srchBarOpen)
    }
    if (pathname === '/user') return null
    return (
        <header ref={headerRef} className={style.header}>
            <div className={style.gnb}>
                <h1 className={style.gnbLogo}>
                    <Link href="/">여기어때.</Link>
                </h1>
                <button
                    type="button"
                    className={
                        srchBarOpen
                            ? `${style.btnSrch} ${style.opened}`
                            : style.btnSrch
                    }
                    onClick={handleSrchBar}>
                    <SearchIcon className={style.btnSrchIcon} />
                    <span className="blind">검색</span>
                </button>
                <ul
                    className={
                        srchBarOpen ? `${style.gnbCata} hide` : style.gnbCata
                    }>
                    <li>
                        <Link href={'/room/1'} className={style.gnbCataLink}>
                            숙소찾기
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/my/reservations'}
                            className={style.gnbCataLink}>
                            예약내역
                        </Link>
                    </li>
                    <li>
                        <span className={style.gnbCataLink}>
                            더보기
                            <ul className={style.gnbCataSub}>
                                <li>
                                    <Link href={'/more/notice'}>공지사항</Link>
                                </li>
                                <li>
                                    <Link href={'/more/event'}>이벤트</Link>
                                </li>
                                <li>
                                    <Link href={'/more/inquiry'}>1:1문의</Link>
                                </li>
                            </ul>
                        </span>
                    </li>
                    {isLogin ? (
                        <li>
                            <span className={style.gnbCataLink}>
                                <span className={style.user}>
                                    <span className="blind">내정보</span>
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
                                        {userInfo.name}님
                                    </b>
                                    <li>
                                        <Link href={'/my/mypage'}>내정보</Link>
                                    </li>
                                    <li>
                                        <Link href={'/my/reservations'}>
                                            예약내역
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/my/likes'}>좋아요</Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>로그아웃</Link>
                                    </li>
                                </ul>
                            </span>
                        </li>
                    ) : (
                        <li>
                            <Link href={'/user'} className={style.gnbCataLink}>
                                로그인
                            </Link>
                        </li>
                    )}
                </ul>
                {srchBarOpen && (
                    <SrchBar
                        srchBarOpen={srchBarOpen}
                        handleSrchBar={handleSrchBar}
                    />
                )}
            </div>
        </header>
    )
}

export default Header
