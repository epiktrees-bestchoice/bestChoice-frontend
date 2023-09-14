'use client'
import Link from 'next/link'
import login_style from '@/app/styles/login.module.scss'
import { useState } from 'react'
import '@/public/fonts/style.css'

function Logo() {
    return (
        <div className={login_style.title_logo}>
            <strong className={login_style.logo}>
                <Link href="/">여기어때.</Link>
            </strong>
        </div>
    )
}

function SnsBtn_box() {
    let [LoginSNS, setLoginSNS] = useState<string[]>([
        ' 카카오톡으',
        ' Google',
        'Facebook으',
    ])
    return (
        <div className={login_style.snsBtn_box}>
            <Btn
                title={LoginSNS[0]}
                bg_color="rgb(252,229,30)"
                color="black"></Btn>
            <Btn title={LoginSNS[1]} bg_color="#E8E7E7" color="black"></Btn>
            <Btn title={LoginSNS[2]} bg_color="blue" color="white"></Btn>
        </div>
    )
}

function Btn(props: { title: string; bg_color: string; color: string }) {
    return (
        <button
            className={login_style.snsBtn}
            style={{ backgroundColor: props.bg_color, color: props.color }}>
            {props.title}로 로그인
        </button>
    )
}

function Input_box() {
    return (
        <div>
            <Input
                type="email"
                name="id"
                placeholder="이메일 주소"
                data-msg-required="이메일 주소를 입력해 주세요."></Input>

            <Input type="password" name="pw" placeholder="비밀번호"></Input>
        </div>
    )
}

function Input(props) {
    return (
        <div className={login_style.login_input}>
            <input
                type={props.type}
                name={props.id}
                placeholder={props.placeholder}
            />
        </div>
    )
}

function Space_or() {
    return (
        <div className={login_style.or_box}>
            <p className={login_style.space_or}>
                <span>또는</span>
            </p>
        </div>
    )
}

function Login_btn() {
    return (
        <div className={`${login_style.snsBtn_box} ${login_style.login_btn}`}>
            <button className={login_style.snsBtn} type="submit">
                로그인
            </button>
        </div>
    )
}

function Login_footer() {
    return (
        <div className={login_style.footer_box}>
            <div className={login_style.join_box}>
                <div className={login_style.textbox}>
                    <a href="https://www.goodchoice.kr/user/join">
                        <span>비밀번호 재설정</span>
                    </a>
                </div>
            </div>

            <div className={login_style.join_box}>
                <div className={login_style.textbox}>
                    <a href="https://www.goodchoice.kr/user/join">
                        <span>회원가입</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function Login() {
    return (
        <>
            <main className={login_style.background}>
                <form className={login_style.form_box}>
                    <input type="hidden"></input>
                    <Logo />
                    <SnsBtn_box />
                    <Space_or />
                    <Input_box />
                    <Login_btn />
                    <Login_footer />
                </form>
            </main>
        </>
    )
}
