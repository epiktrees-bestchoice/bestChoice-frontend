import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function DELETE(request: NextRequest) {
    const cookieStore = cookies()
    const token = cookieStore.get('JSESSIONID')
    const { searchParams } = new URL(request.url)
    const userLikeId = searchParams.get('userLikeId')
    console.log(userLikeId + '를 제거')
    try {
        const res = await fetch(
            `https://api.epicktrees.net/api/v1/my/like/${userLikeId}`,
            {
                method: 'DELETE',
                headers: {
                    cookie: `JSESSIONID=${token.value}`,
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            },
        )
        const data = await res.json()
        console.log(data)
        return NextResponse.json({ data: data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
