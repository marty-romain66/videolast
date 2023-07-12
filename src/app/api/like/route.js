import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const prisma = new PrismaClient();
  const like = await prisma.like.create({
    data: {
      videoId: body.videoId,
      userId: body.userId,
    },
  });

  return NextResponse.json(like);
}

export async function GET(request) {
  const body = await request.json();
  console.log(body);
  const prisma = new PrismaClient();
  const like = await prisma.like.findMany({
    where: {
      videoId: body.videoId,
    },
  });

  return NextResponse.json(like);
}
