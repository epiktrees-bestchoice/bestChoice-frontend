import { NextRequest, NextResponse } from 'next/server'
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page')
    const query = searchParams.get('query')
    console.log(page, query)
    try {
        const res = await fetch(
            `https://api.epicktrees.net/api/v1/search/result/${query}?page=${page}`,
        )
        const data = await res.json()
        console.log(data)
        return NextResponse.json({ data: data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}