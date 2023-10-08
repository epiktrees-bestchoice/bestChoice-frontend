import Link from 'next/link'
import React from 'react'
import style from '@/app/styles/home.module.scss'

export const roomCata = [
    { id: 1, type: 'MOTEL', name: '모텔', icon: './icons/ico_category_01.png' },
    {
        id: 2,
        type: 'HOTEL',
        name: '호텔·리조트',
        icon: './icons/ico_category_02.png',
    },
    {
        id: 3,
        type: 'PENSION',
        name: '펜션',
        icon: './icons/ico_category_03.png',
    },
    {
        id: 4,
        type: 'GUESTHOUSE',
        name: '게스트하우스',
        icon: './icons/ico_category_04.png',
    },
    {
        id: 5,
        type: 'CAMPING',
        name: '캠핑',
        icon: './icons/ico_category_05.png',
    },
]

const HomeCata = async () => {
    return (
        <div className={style.homeCata}>
            <ul className={style.homeCataList}>
                {roomCata.map((link, idx) => {
                    return (
                        <li key={idx} className={style.item}>
                            <Link
                                href={`/room/${link.type}`}
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
