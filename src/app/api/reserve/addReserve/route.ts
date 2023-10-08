import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
    const cookieStore = cookies()
    const token = cookieStore.get('JSESSIONID')

    const res = await request.json()
   console.log(res)
    

    const requestBody = request.body
  

    try {
        const res = await fetch(
            `https://api.epicktrees.net/api/v1/reserve/user/accommodation?startDate=2023-08-23&endDate=2023-08-24'`,
            {
                method: 'POST',
                headers: {
                    cookie: `JSESSIONID=${token.value}`,
                    'Content-Type': 'application/json', 
                },
                credentials: 'include',
                body: JSON.stringify(requestBody), 
            },
        )
        const data = await res.json()
        console.log(data)
        return NextResponse.json({ data: data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
