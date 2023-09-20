'use client'

import Link from 'next/link'
import React from 'react'
import style from '@/app/styles/home.module.scss'

export const homeInfo = [
    {
        title: '여기어때 비즈니스',
        img: './img/home/b2b_banner.png',
        path: 'https://www.goodchoice.kr/b2b/intro',
        desc: `출장부터 복지까지 \n 여기어때 비즈니스로 스마트하게`,
    },
    {
        title: '여기어때 서체 출시',
        img: './img/home/re_jalnan.png',
        path: 'https://www.goodchoice.kr/font',
        desc: `젊고 당당한 여기어때 잘난체 \n 지금 다운로드 받으세요!`,
    },
]
const HomeInfo = () => {
    return (
        <div className={style.homeInfo}>
            <h2>여기어때 소식</h2>
            <ul className={style.homeInfoList}>
                {homeInfo.map((item, idx) => {
                    return (
                        <li key={idx} className={style.item}>
                            <Link href={item.path} className={style.itemLink}>
                                <img src={item.img} alt="" />
                                <span className={style.boxTxt}>
                                    <strong className={style.tit}>
                                        {item.title}
                                    </strong>
                                    {item.desc}
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div className={style.homeAppdown}>
                <img src="./img/home/bg_appdown.png" alt="" />
                <div className={style.homeAppdownBox}>
                    <p className={style.txt}>
                        앱 다운 받고 <b>더 많은 혜택</b> 받으세요
                    </p>
                    <div className={style.icons}>
                        <Link
                            href="https://play.google.com/store/apps/details?id=kr.goodchoice.abouthere&pli=1"
                            target="_blank"
                            title="구글플레이 새창">
                            <img src="./icons/banner_and.png" alt="" />
                        </Link>
                        <Link
                            href="https://apps.apple.com/kr/app/yeogieottae-1deung-sugbag/id884043462?ign-mpt=uo%3D2"
                            target="_blank"
                            title="앱스토어 새창">
                            <img src="./icons/banner_ios.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeInfo
