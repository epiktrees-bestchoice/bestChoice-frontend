import style from '@/app/layout/pageTop/pageTop.module.scss'

const PageTop = ({ ...props }) => {
    return (
        <div className={style.top}>
            <div className={style.inner}>
                <h2 className={style.topTit}>{props.title}</h2>
                {props.children}
            </div>
        </div>
    )
}

export default PageTop
