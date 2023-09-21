import Link from 'next/link'
import React from 'react'
import { collection, getDocs, query, onSnapshot } from 'firebase/firestore'
import { db } from '@/app/api/firebase'

import style from '@/app/styles/home.module.scss'
import { getCatagoryCollection } from '@/app/api/getFireBaseData'

const HomeCata = async () => {
    const homeCatagories = await getCatagoryCollection()
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
