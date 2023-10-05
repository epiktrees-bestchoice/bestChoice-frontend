import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
    const cookieStore = cookies()
    const token = cookieStore.get('JSESSIONID')

    const requestBody = {
        // reserveId: 1, // 또는 원하는 값을 설정하세요
        // userId: 1, // 예시로 1을 설정했습니다
        // accommodationId: 1, // 예시로 1을 설정했습니다
    }
    //api 완성되면 수정할 것 

    try {
        const res = await fetch(
            `https://api.epicktrees.net/api/v1/my/like/{userLikedId}`,
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
