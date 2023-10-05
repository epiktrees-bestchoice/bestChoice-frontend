'use client'
import style from '@/app/styles/user.module.scss'
import '@/public/fonts/style.css'
import {
    LoginFooter,
    LoginButton,
    SpaceOr,
    InputBox,
    Logo,
    SnsButtonBox,
} from '@/app/user/UserComponent'

export default function Login() {
    return (
        <>
            <main className={style.background}>
                <form className={style.formBox}>
                    <input type="hidden"></input>
                    <Logo />
                    <SnsButtonBox />
                </form>
            </main>
        </>
    )
}
