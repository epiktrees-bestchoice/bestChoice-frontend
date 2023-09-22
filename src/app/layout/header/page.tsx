'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

import SearchIcon from '@mui/icons-material/Search'
import SrchBar from '@/app/components/SrchBar'

import style from '@/app/layout/header/header.module.scss'
import HeaderNavLogin from '@/app/layout/header/HeaderNavLogin'
import HeaderNavLogout from '@/app/layout/header/HeaderNavLogout'

const Header = () => {
    const pathname = usePathname()
    const headerRef = useRef(null)

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
                    <HeaderNavLogin />
                    {/* <HeaderNavLogout /> */}
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
