import style from '@/app/styles/user.module.scss'
import Link from 'next/link'
import { useState } from 'react'
import '@/public/fonts/style.css'

function Logo() {
    return (
        <div className={style.logoBox}>
            <strong>
                <Link className={style.logo} href="/">
                    여기어때.
                </Link>
            </strong>
        </div>
    )
}

function SnsButtonBox() {
    let [LoginSNS, setLoginSNS] = useState<string[]>([
        ' 카카오톡으',
        ' Google',
        'Facebook으',
    ])
    return (
        <div className={style.snsButtonBox}>
            <Button
                title={LoginSNS[0]}
                bg_color="rgb(252,229,30)"
                color="black"></Button>
            <Button
                title={LoginSNS[1]}
                bg_color="#E8E7E7"
                color="black"></Button>
            <Button title={LoginSNS[2]} bg_color="blue" color="white"></Button>
        </div>
    )
}

function Button(props: { title: string; bg_color: string; color: string }) {
    return (
        <button
            className={style.snsButton}
            style={{ backgroundColor: props.bg_color, color: props.color }}>
            {props.title}로 로그인
        </button>
    )
}

function InputBox() {
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
        <div className={style.loginInputBox}>
            <input
                className={style.loginInput}
                type={props.type}
                name={props.id}
                placeholder={props.placeholder}
            />
        </div>
    )
}

function SpaceOr() {
    return (
        <div className={style.orBox}>
            <p className={style.orSpace}>
                <span className={style.orSpan}>또는</span>
            </p>
        </div>
    )
}

function LoginButton() {
    return (
        <div className={`${style.snsButtonBox} ${style.loginButton}`}>
            <button
                className={`${style.snsButton} ${style.normalLoginButton}`}
                type="submit">
                로그인
            </button>
        </div>
    )
}

function LoginFooter() {
    return (
        <div className={style.footer}>
            <div className={style.footerJoin}>
                <div>
                    <a
                        className={style.footerText}
                        href="https://www.goodchoice.kr/user/join">
                        <span>비밀번호 재설정</span>
                    </a>
                </div>
            </div>

            <div className={style.footerJoin}>
                <div>
                    <a
                        className={style.footerText}
                        href="https://www.goodchoice.kr/user/join">
                        <span>회원가입</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export { LoginFooter, LoginButton, SpaceOr, InputBox, Logo, SnsButtonBox }
