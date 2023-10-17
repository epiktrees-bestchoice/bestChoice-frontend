import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
    const cookieStore = cookies()
    const token = cookieStore.get('JSESSIONID')
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const accommodationId = searchParams.get('accommodationId')
    console.log(userId + ' ' + accommodationId + ' 추가')
    try {
        const res = await fetch(process.env.API_URL + `/api/v1/my/like`, {
            method: 'POST',
            headers: {
                cookie: `JSESSIONID=${token.value}`,
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                userId: userId,
                accommodationId: accommodationId,
            }),
        })
        const data = await res.json()
        console.log(data)
        return NextResponse.json({ data: data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
