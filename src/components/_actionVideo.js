"use server"
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/server";

export const addVideo = async (e, id) => {
    const prisma = new PrismaClient();

   const data = await prisma.videos.create({
        data: {
            name: e.get("name"),
            description: e.get("description"),
            url: e.get("url"),
            userId:  id,
        },
    });
    console.log(data)
    revalidatePath("/");
   
}
export default addVideo



