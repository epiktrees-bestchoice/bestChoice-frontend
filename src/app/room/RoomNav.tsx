import Link from 'next/link'
import React from 'react'
import style from '@/app/room/room.module.scss'

const RoomNav = () => {
    return (
        <div className="inner">
            <div className={style.roomNav}>
                <Link
                    className={`${style.roomNavItem} ${style.on}`}
                    href={`/room/1`}>
                    모텔
                </Link>
                <Link className={style.roomNavItem} href={`/room/2`}>
                    호텔·리조트
                </Link>
                <Link className={style.roomNavItem} href={`/room/3`}>
                    펜션
                </Link>
                <Link className={style.roomNavItem} href={`/room/4`}>
                    게스트하우스
                </Link>
                <Link className={style.roomNavItem} href={`/room/5`}>
                    캠핑·글램핑
                </Link>
            </div>
        </div>
    )
}

export default RoomNav
