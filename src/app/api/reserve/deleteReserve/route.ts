import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function DELETE(request: NextRequest) {
 



    try {
        const res = await fetch(
            `https://api.epicktrees.net/api/v1/reserve/user/delect`,
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






 