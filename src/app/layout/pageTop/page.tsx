'use client'
import style from '@/app/layout/pageTop/pageTop.module.scss'
import { useSearchParams } from 'next/navigation'

const PageTop = ({ ...props }) => {
    const searchParams = useSearchParams()
    const search = searchParams.get('query')
    return (
        <div className={style.top}>
            <div className={style.inner}>
                <h2 className={style.topTit}>
                    {search ? decodeURIComponent(search) : props.title}
                </h2>
                {props.children}
            </div>
        </div>
    )
}

export default PageTop
