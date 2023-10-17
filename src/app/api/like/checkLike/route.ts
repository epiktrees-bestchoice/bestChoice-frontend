import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { useSearchParams } from 'next/navigation'
//pr을 위한 주석
export async function GET(request: NextRequest) {
    const cookieStore = cookies()
    const token = cookieStore.get('JSESSIONID')
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    try {
        const res = await fetch(
            process.env.API_URL + `/api/v1/my/like/${userId}`,
            {
                method: 'GET',
                headers: {
                    cookie: `JSESSIONID=${token.value}`,
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
