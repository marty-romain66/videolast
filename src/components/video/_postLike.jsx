"use server"
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/server";

export const addLike = async (e, userId, videoId) => {
    const  prisma = new PrismaClient();
    const data = await prisma.like.create({
        data: {
            userId: userId,
            videoId: videoId,
        }
    })
  revalidatePath(`/`)
}
export default addLike;
