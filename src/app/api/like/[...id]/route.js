import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req, { params }) {
  const id = params.id[0];
  const test = params.id[1];
  console.log(test);
  const prisma = new PrismaClient();

  const like = await prisma.like.findMany({
    where: {
      videoId: id,
    },
  });
  const verify = await prisma.like.findMany({
    where: { userId: test}
    })


  // count the number of likes
  const liked = verify.length;
    const dejaLike = liked > 0 ? true : false;
  const count = like.length;
  return NextResponse.json({ count, dejaLike,  like });
}

export async function DELETE(req,res) {
 
  console.log(test);
  const prisma = new PrismaClient();

  const deleteLike = await prisma.like.delete({
    where: {
   id: "cljkbbg87000murc8smmi84cm"
    },
  });


  // count the number of likes

  return NextResponse.json(deleteLike);
}