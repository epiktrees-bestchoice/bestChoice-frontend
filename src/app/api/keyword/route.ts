import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
    //api 완성되면 수정할 것
    const { searchParams } = new URL(request.url)
    const categoryId = searchParams.get('categoryId')
    try {
        const res = await fetch(
            `https://api.epicktrees.net/api/v1/keywords/${categoryId}`,
            {
                method: 'GET',
            },
        )
        const data = await res.json()
        return NextResponse.json({ data: data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
