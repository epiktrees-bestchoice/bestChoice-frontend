import { NextRequest, NextResponse } from 'next/server'


export async function DELETE(request: NextRequest,
    { params }: { params: { id: string } },) {

        const res = await request.json()
        console.log(res)
    try {
        const res = await fetch(
            `https://api.epicktrees.net/api/v1/reserve/${params.id}`,
            {
                method: 'DELETE',
            },
        )
        const data = await res.json()
        console.log(data)
        return NextResponse.json({ data: data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}






 