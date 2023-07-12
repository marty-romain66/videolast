import { NextResponse , NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client'


export async function GET(req) {
  const prisma = new PrismaClient()
  const data = await prisma.videos.findMany({
    include: {
      user: true
    }
  })
  console.log(data)
  return NextResponse.json(data)
}

export async function POST(request) {
  const body = await request.json()
const prisma = new PrismaClient()
const videos = await prisma.videos.create({
  data: {
    name: body.name,
    userId: "clja06fxs0009urtgt14hr016"
}
})
console.log(videos)
return NextResponse.json(videos)
}
