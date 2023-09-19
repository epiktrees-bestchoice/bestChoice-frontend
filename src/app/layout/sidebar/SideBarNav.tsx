import Link from 'next/link'
import React from 'react'

const SideBarNav = ({ ...props }) => {
    return (
        <Link
            key={props.key}
            className={`${
                props.param === props.path ? 'navItemOn' : 'navItem'
            }`}
            href={props.href}>
            {props.name}
        </Link>
    )
}

export default SideBarNav
