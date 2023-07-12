import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(request) {
    const body = await request.json();
    console.log(body);
    const prisma = new PrismaClient();
   const comment = await prisma.comment.create({
        data: {
        videoId: body.videoId,
        userId: body.userId,
       text: body.text,
        },
    });

    return NextResponse.json(comment);
}
