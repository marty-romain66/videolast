"use server"
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/server";

export default async function addLike( id) {
    console.log(e)
    const prisma = new PrismaClient();

   const data = await prisma.like.create({
        data: {
            videoId: "cljdh4mif0009ur78p45vmqxo",
            userId:  id,
        },
    });
    console.log(data)
    revalidatePath("/");
   
}