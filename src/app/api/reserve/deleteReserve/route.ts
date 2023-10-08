import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function DELETE(request: NextRequest) {
    const cookieStore = cookies()
    const token = cookieStore.get('JSESSIONID')

    const requestBody = request.body

    try {
        const res = await fetch(
            `https://api.epicktrees.net/api/v1/reserve/user/delect`,
            {
                method: 'DELETE',
                headers: {
                    cookie: `JSESSIONID=${token.value}`,
                    'Content-Type': 'application/json', // Content-Type 설정
                },
                credentials: 'include',
                body: JSON.stringify(requestBody), // FormData 객체를 요청 본문으로 사용
            },
        )
        const data = await res.json()
        console.log(data)
        return NextResponse.json({ data: data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}






 