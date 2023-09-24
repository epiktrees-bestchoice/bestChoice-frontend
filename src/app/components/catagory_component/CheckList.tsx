import style from '@/app/styles/RoomCata.module.scss'

export default function CheckList({ info, list, onChange }) {
    return (
        <>
            {info.isTitle && <h3>{info.title}</h3>}
            <ul
                className={` ${
                    info.isGrid ? style.detailListGrid : style.detail
                }`}>
                {list.map((val, idx) => (
                    <li key={idx} className={style.detailList}>
                        <input
                            id={val.id}
                            type="checkbox"
                            name={`${val.condition}${val.id}`}
                            value={val.value}
                            onChange={onChange}
                            className={style.inputCheck}
                        />
                        <label
                            className={style.inputCheckLabel}
                            htmlFor={val.id}>
                            {val.title}
                        </label>
                    </li>
                ))}
            </ul>
        </>
    )
}
