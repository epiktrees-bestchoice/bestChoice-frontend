'use client'
import style from '@/app/styles/login.module.scss'
import '@/public/fonts/style.css'
import {
    Login_footer,
    Login_btn,
    Space_or,
    Input_box,
    Logo,
    SnsBtn_box,
} from '@/app/user/UserComponent'

export default function Login() {
    return (
        <>
            <main className={style.background}>
                <form className={style.formBox}>
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
