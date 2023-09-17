import React from 'react'
import style from '@/app/layout/loginSidebar/loginSidebar.module.scss'

// 로그인 hover시 sidebar 띄우기 구현 필요 - 20230916 by epik (수정 완료시 주석 삭제)
//

function LoginSideBar() {
    return (
        <div>
            <ul className={style.loginSidebar}>
                <li className={style.userIdLi}>
                    <b className={style.userId}>아이디</b>
                </li>
                <li className={style.userInfoList}>
                    <a href="/">내 정보</a>
                </li>
                <li className={style.userInfoList}>
                    <a href="/">예약 내역</a>
                </li>
                <li className={style.userInfoList}>
                    <button
                        type="button"
                        className={style.logoutButton}
                        onClick={() => {}}>
                        로그아웃
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default LoginSideBar
