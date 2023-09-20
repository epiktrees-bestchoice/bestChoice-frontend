import Link from 'next/link'
import HomeCata from '@/app/components/HomeCata'
import HomeInfo from '@/app/components/HomeInfo'
import HomeSwiper from '@/app/components/HomeSwiper'

import style from '@/app/styles/home.module.scss'

export default function Home() {
    return (
        <main className="content">
            <div className={`inner ${style.home}`}>
                <div className={style.homeBanner}>
                    {/* Link href 수정 필요 - 20230825 by oliv (수정 완료시 주석 삭제) */}
                    <Link
                        className={style.homeBannerLink}
                        href="https://www.goodchoice.kr/more/eventView/3328">
                        <span className="blind">여행할 때 여기어때</span>
                    </Link>
                </div>
                <HomeCata />
                <HomeInfo />
                <HomeSwiper />
            </div>
        </main>
    )
}
