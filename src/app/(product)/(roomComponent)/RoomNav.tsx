import Link from 'next/link'
import React from 'react'
import style from '@/app/(product)/room.module.scss'

const RoomNav = ({ props, params }) => {
    return (
        <div className="inner">
            <div className={style.roomNav}>
                {props.map((nav) => {
                    return (
                        <Link
                            key={nav.type}
                            className={`${style.roomNavItem} ${
                                params == nav.type ? style.on : ''
                            }`}
                            href={`/room/${nav.type}`}>
                            {nav.name}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default RoomNav
