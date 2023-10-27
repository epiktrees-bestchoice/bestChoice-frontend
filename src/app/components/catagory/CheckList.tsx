import style from '@/app/styles/RoomCata.module.scss'

export default function CheckList({ info, list, onChange }) {
    console.log(list)
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
                            id={val.keywordName + val.keywordId}
                            type="checkbox"
                            name={`${val.condition}${val.keywordId}`}
                            value={val.keywordName}
                            onClick={onChange}
                            className={style.inputCheck}
                        />
                        <label
                            className={style.inputCheckLabel}
                            htmlFor={val.keywordId}>
                            {val.keywordName}
                        </label>
                    </li>
                ))}
            </ul>
        </>
    )
}
