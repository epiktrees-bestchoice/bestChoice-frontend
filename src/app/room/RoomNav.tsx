import Link from 'next/link'
import React from 'react'
import style from '@/app/room/room.module.scss'

const RoomNav = () => {
    return (
        <div className="inner">
            <div className={style.roomNav}>
                <Link
                    className={`${style.roomNavItem} ${style.on}`}
                    href={`/room/motel`}>
                    모텔
                </Link>
                <Link className={style.roomNavItem} href={`/room/hotel`}>
                    호텔·리조트
                </Link>
                <Link className={style.roomNavItem} href={`/room/pension`}>
                    펜션
                </Link>
                <Link className={style.roomNavItem} href={`/room/gHouse`}>
                    게스트하우스
                </Link>
                <Link className={style.roomNavItem} href={`/room/camping`}>
                    캠핑·글램핑
                </Link>
            </div>
        </div>
    )
}

export default RoomNav
