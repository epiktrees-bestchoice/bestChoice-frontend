import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
    const cookieStore = cookies()
    const token = cookieStore.get('JSESSIONID')
    console.log('logout cookie : ', token.value)
    try {
        const res = await fetch('https://api.epicktrees.net/api/v1/my/logout', {
            method: 'POST',
            headers: {
                cookie: `JSESSIONID=${token.value}`,
            },
            credentials: 'include',
        })
        console.log(res)
        console.log('Next API response', res)

        if (res.status === 200) {
            cookieStore.delete('JSESSIONID')

            // 로그아웃하고 리다이렉트할 URL
            const redirectUrl = 'https://epicktrees.net'
            return NextResponse.redirect(redirectUrl)
        } else {
            console.error(`Error: ${res.status}`)
            return new Response('Spring Server Error', {
                status: 500,
            })
        }
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}