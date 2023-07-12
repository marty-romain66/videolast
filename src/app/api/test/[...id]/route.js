import { NextResponse , NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client'

export async function GET(req, { params}) {
    console.log(params.id[0])
    const id = params.id[0]
    const test = params.id[1]
    console.log(test)
    const prisma = new PrismaClient()

    const like = await prisma.like.findMany({
        where: {
            videoId: id
        }

    })
  
// count the number of likes
    const count = like.length
    return NextResponse.json(count)
}