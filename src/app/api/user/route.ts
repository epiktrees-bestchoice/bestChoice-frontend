import { NextRequest, NextResponse } from 'next/server'

export const cookieValue = 'JSESSIONID=34668C266465637EDC65985A011AE00F'

export async function GET(request: NextRequest) {
    try {
        const res = await fetch('https://api.epicktrees.net/api/v1/my/info', {
            method: 'GET',
            headers: {
                cookie: cookieValue,
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
