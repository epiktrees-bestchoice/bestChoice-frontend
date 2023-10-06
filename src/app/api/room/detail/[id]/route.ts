import { NextRequest, NextResponse } from 'next/server'
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } },
) {
    try {
        const res = await fetch(
            `https://api.epicktrees.net/api/product/accommodation/${params.id}`,
        )
        const data = await res.json()
        return NextResponse.json({ data: data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
