import { NextResponse } from 'next/server'
 



export async function GET(request) {
  console.log(request.headers)
  const res = await fetch('https://api.epicktrees.net/api/product/accommodation/all', {
    method: 'GET',
    headers: request.headers,
})
const data = await res.json()
  
  return NextResponse.json({ data }, { status: 200 });
}