import React from 'react'

const Sidebar = (props) => {
    return (
        <aside className={`side ${props.className ? props.className : ''}`}>
            {props.children}
        </aside>
    )
}

export default Sidebar
