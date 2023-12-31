import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/app/layout/header/page'
import Footer from '@/app/layout/footer/page'

import '@/app/styles/globals.scss'
import Providers from '@/app/provider/providers'
import { Suspense } from 'react'
import Loading from '@/app/loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: '클론할땐 저기어때',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
            <body className={inter.className}>
                <Providers>
                    <Suspense fallback={<Loading />}>
                        <div className="wrap bg-white">
                            <Header />
                            {children}
                            {/* {children} */}
                            <Footer />
                        </div>
                    </Suspense>
                </Providers>
            </body>
        </html>
    )
}
