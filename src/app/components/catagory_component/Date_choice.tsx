import { createContext, use, useContext, useState } from 'react'
import style from '@/app/styles/RoomCata.module.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/esm/locale'

export default function Date_choice() {
    const [dateRange, setDateRange] = useState([new Date(), null])
    const [startDate, endDate] = dateRange
    return (
        <>
            <div className={style.calendarChoiceBox}>
                <h3 className={style.calendarDate}>날짜</h3>
                <label htmlFor="Date" className={style.calendarButton}>
                    <div className={style.calendarButtonBox}>
                        <DatePicker
                            id="Date"
                            className={style.DatePicker}
                            selectsRange={true}
                            startDate={startDate}
                            locale={ko}
                            dateFormat="MM.dd"
                            endDate={endDate}
                            minDate={new Date()}
                            onChange={(update) => {
                                setDateRange(update)
                            }}
                        />
                    </div>
                </label>
            </div>
        </>
    )
}
