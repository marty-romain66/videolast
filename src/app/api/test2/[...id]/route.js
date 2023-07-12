import { NextResponse , NextRequest } from "next/server";
export async function GET(req, { params}) {
    const id = params.id
    const hello = "hello"
    return NextResponse.json("hello")
}