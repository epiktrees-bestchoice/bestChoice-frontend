import Link from 'next/link'
import React from 'react'

import style from '@/app/styles/home.module.scss'
export const homeCatagories = [
    // path 수정 필요 - 20230825 by oliv (수정 완료시 주석 삭제)
    { id: 'motel', name: '모텔', icon: './icons/ico_category_01.png' },
    {
        id: 'hotel',
        name: '호텔·리조트',
        icon: './icons/ico_category_02.png',
    },
    {
        id: 'pension',
        name: '펜션',
        icon: './icons/ico_category_03.png',
    },
    {
        id: 'gHouse',
        name: '게스트하우스',
        icon: './icons/ico_category_04.png',
    },
    {
        id: 'camping',
        name: '캠핑·글램핑',
        icon: './icons/ico_category_05.png',
    },
]

const HomeCata = () => {
    return (
        <div className={style.homeCata}>
            <ul className={style.homeCataList}>
                {homeCatagories.map((link, idx) => {
                    return (
                        <li key={idx} className={style.item}>
                            <Link
                                href={`/room/${link.id}`}
                                className={style.itemLink}>
                                <span className={style.boxImg}>
                                    <img src={link.icon} alt="" />
                                </span>
                                <span className={style.boxTxt}>
                                    {link.name}
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default HomeCata
