import { NextResponse , NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client'
import { headers } from 'next/headers'

export async function GET(req) {
  const headersList = headers()
  const referer = headersList.get('referer')
  const split = referer.split('/')
  const id = split[split.length - 1]
  console.log(id)


  const prisma = new PrismaClient()
  const data = await prisma.videos.findMany({
    where: {
        category: id
    },
  
    include: {
      user: true,
      comment: true,
    }
  })
  
  return NextResponse.json(data)
}

// export async function POST(request) {
//   const body = await request.json()
// const prisma = new PrismaClient()
// const videos = await prisma.videos.create({
//   data: {
//     name: body.name,
//     userId: "clja06fxs0009urtgt14hr016"
// }
// })
// console.log(videos)
// return NextResponse.json(videos)
// }
