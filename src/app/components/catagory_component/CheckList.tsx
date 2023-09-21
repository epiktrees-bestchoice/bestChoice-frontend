import style from '@/app/styles/RoomCata.module.scss'

export default function CheckList({ info, list }) {
    return (
        <>
            <section className={style.detailListBox}>
                {info.isTitle && (
                    <strong className={style.detailTitle}>{info.title}</strong>
                )}
                <ul
                    className={` ${
                        info.isGrid ? style.detailListGrid : style.detail
                    }`}>
                    {list.map((val, idx) => (
                        <li key={idx} className={style.detailList}>
                            <input
                                id={val.id}
                                type="checkbox"
                                className={style.input}></input>
                            <label
                                className={style.detailListLabel}
                                htmlFor={val.id}>
                                {val.title}
                            </label>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
