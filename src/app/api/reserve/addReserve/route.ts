import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
    const cookieStore = cookies()
    const token = cookieStore.get('JSESSIONID')
    const res = await request.json()
    const requestBody = res
    try {
        const res = await fetch(
            `https://api.epicktrees.net/api/v1/reserve/user/accommodation`,
            {
                method: 'POST',
                headers: {
                    cookie: `JSESSIONID=${token.value}`,
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    userId: requestBody.userId,
                    accommodationId: requestBody.accommodationId,
                    reserveDate: requestBody.userId,
                    endDate: requestBody.userId,
                }),
            },
        )
        const data = await res.json()
        return NextResponse.json({ data: data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
