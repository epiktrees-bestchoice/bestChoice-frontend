import React from 'react'
import style from '@/app/layout/pageTop/pageTop.module.scss'

const PageTop = ({ children }) => {
    return (
        <div className={style.top}>
            <div className={style.inner}>
                <h2 className={style.topTit}>내정보</h2>
                {children}
            </div>
        </div>
    )
}

export default PageTop
