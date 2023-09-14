'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import style from '@/app/layout/footer/footer.module.scss'

const Footer = () => {
    const pathname = usePathname()
    if (pathname === '/user') return null

    return (
        <footer className={style.footer}>
            <div className={style.footerWrap}>
                <ul className={style.footerLink}>
                    <li className={style.footerLinkItem}>
                        <a href="#none">회사소개</a>
                        <span className={style.divider}>|</span>
                    </li>
                    <li className={style.footerLinkItem}>
                        <a href="#none" data-default="term">
                            이용약관
                        </a>
                        <span className={style.divider}>|</span>
                    </li>
                    <li className={style.footerLinkItem}>
                        <a href="#none" data-default="privacy">
                            개인정보처리방침
                        </a>
                        <span className={style.divider}>|</span>
                    </li>
                    <li className={style.footerLinkItem}>
                        <a href="#none" data-default="consumer">
                            소비자 분쟁해결 기준
                        </a>
                        <span className={style.divider}>|</span>
                    </li>
                    <li className={style.footerLinkItem}>
                        <span>사업자 정보확인</span>
                        <span className={style.divider}>|</span>
                    </li>
                    <li className={style.footerLinkItem}>
                        <a href="#none">여기어때 마케팅센터</a>
                        <span className={style.divider}>|</span>
                    </li>
                    <li className={style.footerLinkItem}>
                        <a href="#none">액티비티 호스트센터</a>
                        <span className={style.divider}>|</span>
                    </li>
                    <li className={style.footerLinkItem}>
                        <a href="#none">HOTEL 여기어때</a>
                        <span className={style.divider}>|</span>
                    </li>
                    <li className={style.footerLinkItem}>
                        <a href="#none">콘텐츠산업진흥법에 의한 표시</a>
                    </li>
                </ul>
                <p className={style.call}>
                    <b>고객행복센터 1670-6250</b>
                    <span>오전 9시 - 새벽 3시</span>
                </p>
                <div className={style.addr}>
                    <span className={style.addrComp}>(주) 여기어때컴퍼니</span>
                    주소 : 서울특별시 강남구 봉은사로 479, 479타워 11층 |
                    대표이사 : 정명훈 | 사업자등록번호: 742-86-00224 |
                    전자우편주소 : help@goodchoice.kr<br></br>
                    통신판매번호 : 2017-서울강남-01779 | 관광사업자 등록번호:
                    제1026-24호 | 전화번호 : 1670-6250 | 호스팅서비스제공자의
                    상호 표시: (주)여기어때컴퍼니<br></br>
                    <span className={style.addrInfo}>
                        (주) 여기어때컴퍼니는 통신판매중개자로서 통신판매의
                        당사자가 아니며, 상품의 예약, 이용 및 환불 등과 관련한
                        의무와 책임은 각 판매자에게 있습니다.
                    </span>
                    <br></br>
                    Copyright GC COMPANY Corp. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
