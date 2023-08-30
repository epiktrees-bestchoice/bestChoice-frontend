import React, { useState, useEffect, useRef, SyntheticEvent } from 'react'
import styles from '@inquiry/components/module/newInquiry.module.css'
import InquryChios from '@inquiry/containers/inquiryChios'
import InquryText from '@inquiry/containers/inquiryText'

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
        console.log('room type : ' + form.room_type.value)
        console.log('inq type : ' + form.inq_type.value)
        console.log('phone number : ' + form.phone_number.value)
        console.log('email_text : ' + form.email_text.value)
        console.log('questionText : ' + form.questionTextarea.value)

        // 폼 초기화
        form.room_type.value = '0'
        form.inq_type.value = '0'
        form.phone_number.value = ''
        form.email_text.value = ''
        form.questionTextarea.value = ''
    }

    return (
        <div className={styles.tab_each}>
            <form className="inq-form" onSubmit={handleSubmit}>
                <div className={styles.alert_top}>
                    <p>
                        여기어때 이용 중 불편하신 점을 문의주시면{' '}
                        <em>최대한 빠른 시일내에 답변 드리겠습니다.</em>
                    </p>
                </div>
                <InquryChios
                    roomTypeRef={roomTypeRef}
                    inqTypeRef={inqTypeRef}
                    phoneRef={phoneRef}
                    emailRef={emailRef}
                />
                <InquryText textareaRef={textareaRef} />
                <section className={styles.btn_wrap}>
                    <button className={styles.btn_red_fill} type="submit">
                        작성완료
                    </button>
                </section>
            </form>
        </div>
    )
}

export default NewInqury
