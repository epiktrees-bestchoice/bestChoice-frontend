import { useState } from 'react'
import style from '@/app/more/more.module.scss'

export const roomList = [
    { value: '0', text: '카테고리유형을 선택하세요.' },
    { value: '1', text: '모텔' },
    { value: '2', text: '호텔·리조트' },
    { value: '3', text: '펜션' },
    { value: '4', text: '게스트하우스' },
    { value: '5', text: '캠핑/글램핑' },
    { value: '6', text: '한옥' },
    { value: '7', text: '액티비티' },
    { value: '8', text: '현금성(유상)포인트' },
]
export const inqList = [
    { value: '0', text: '문의유형을 선택하세요' },
    { value: '1', text: '이벤트' },
    { value: '2', text: '예약/결제' },
    { value: '3', text: '취소/환불' },
    { value: '4', text: '혜택받기' },
    { value: '5', text: '이용문의' },
    { value: '6', text: '회원정보' },
    { value: '7', text: '리뷰' },
    { value: '8', text: '환불신청' },
    { value: '99', text: '기타' },
]

interface InquryChiosProps {
    roomTypeRef: React.RefObject<HTMLSelectElement>
    inqTypeRef: React.RefObject<HTMLSelectElement>
    phoneRef: React.RefObject<HTMLInputElement>
    emailRef: React.RefObject<HTMLInputElement>
    textareaRef: React.RefObject<HTMLTextAreaElement>
}

function InquryChios(props: InquryChiosProps) {
    const { roomTypeRef, inqTypeRef, phoneRef, emailRef, textareaRef } = props

    return (
        <>
            <div className={style.inputWrap}>
                <label htmlFor="roomType">카테고리유형</label>
                <select
                    id="roomType"
                    className={style.item}
                    ref={roomTypeRef}
                    required>
                    {roomList.map((item) => (
                        <option value={item.value} key={item.value}>
                            {item.text}
                        </option>
                    ))}
                </select>
            </div>
            <div className={style.inputWrap}>
                <label htmlFor="inqType">문의유형</label>
                <select
                    className={style.item}
                    id="inqType"
                    ref={inqTypeRef}
                    required>
                    {inqList.map((item) => (
                        <option value={item.value} key={item.value}>
                            {item.text}
                        </option>
                    ))}
                </select>
            </div>
            <div className={style.inputWrap}>
                <label htmlFor="phoneNumber">휴대폰 번호</label>
                <input
                    id="phoneNumber"
                    className={style.item}
                    ref={phoneRef}
                    minLength={10}
                    type="text"
                    placeholder="선택사항입니다."
                />
            </div>
            <div className={style.inputWrap}>
                <label htmlFor="emailText">이메일</label>
                <input
                    id="emailText"
                    className={style.item}
                    ref={emailRef}
                    type="email"
                    placeholder="선택사항입니다."
                />
            </div>
            <div className={style.inputWrap}>
                <label htmlFor="questionTextarea">문의 내용</label>
                <textarea
                    ref={textareaRef}
                    className={style.textarea}
                    id="questionTextarea"
                    placeholder="문의하실 내용을 10자 이상 입력해 주세요."></textarea>
            </div>
        </>
    )
}

export default InquryChios
