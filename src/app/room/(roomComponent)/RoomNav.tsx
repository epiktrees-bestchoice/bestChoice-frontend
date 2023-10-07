import Link from 'next/link'
import React from 'react'
import style from '@/app/room/room.module.scss'

const RoomNav = ({ props, params }) => {
    return (
        <div className="inner">
            <div className={style.roomNav}>
                {props.map((nav) => {
                    return (
                        <Link
                            key={nav.id}
                            className={`${style.roomNavItem} ${
                                params == nav.id ? style.on : ''
                            }`}
                            href={`/room/${nav.id}`}>
                            {nav.name}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default RoomNav
