import React, { useRef, SyntheticEvent } from 'react'

import InquryChios from '@/app/more/inquiry/inquiryChios'
import ButtonDefault from '@/app/components/btns/ButtonDefault'

import style from '@/app/more/more.module.scss'

function NewInqury() {
    // 전화번호와 이메일은 선택사항이므로 없어도 괜찮다.
    const roomTypeRef = useRef<HTMLSelectElement | null>(null)
    const inqTypeRef = useRef<HTMLSelectElement | null>(null)
    const phoneRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement

        // 입력값 확인
        console.log('room type : ' + form.roomType.value)
        console.log('inq type : ' + form.inqType.value)
        console.log('phone number : ' + form.phone_number.value)
        console.log('email_text : ' + form.email_text.value)
        console.log('questionText : ' + form.questionTextarea.value)

        // 폼 초기화
        form.roomType.value = '0'
        form.inqType.value = '0'
        form.phone_number.value = ''
        form.email_text.value = ''
        form.questionTextarea.value = ''
    }

    return (
        <form className={style.inqForm} onSubmit={handleSubmit}>
            <p>
                여기어때 이용 중 불편하신 점을 문의주시면{' '}
                <em>최대한 빠른 시일내에 답변 드리겠습니다.</em>
            </p>
            <InquryChios
                roomTypeRef={roomTypeRef}
                inqTypeRef={inqTypeRef}
                phoneRef={phoneRef}
                emailRef={emailRef}
                textareaRef={textareaRef}
            />
            <div className={style.btnSubmit}>
                <ButtonDefault type="submit">작성완료</ButtonDefault>
            </div>
        </form>
    )
}

export default NewInqury
