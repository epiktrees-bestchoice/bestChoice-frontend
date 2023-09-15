import React from 'react'
import style from '@/app/layout/pageTop/pageTop.module.scss'

const PageTop = ({ children, title }) => {
    return (
        <div className={style.top}>
            <div className={style.inner}>
                <h2 className={style.topTit}>{title}</h2>
                {children}
            </div>
        </div>
    )
}

export default PageTop
