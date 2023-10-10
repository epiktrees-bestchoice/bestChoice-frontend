import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
    const cookieStore = cookies()
    const token = cookieStore.get('JSESSIONID')
    try {
        const res = await fetch('https://api.epicktrees.net/api/v1/my/info', {
            method: 'GET',
            headers: {
                cookie: `JSESSIONID=${token.value}`,
            },
            credentials: 'include',
        })
        const data = await res.json()
        console.log(data)
        return NextResponse.json({ data: data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
