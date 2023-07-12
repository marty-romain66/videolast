"use server"
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/server";

export const supprimerVideo = async (e, id) => {
    const prisma = new PrismaClient();

   const data = await prisma.videos.delete({
        where: {
            id: "cljd5c53h0001urhk04kkzl9d",
        },
    });
    console.log(data)
    revalidatePath("/protected/server?name=&description=");
   
}
export default supprimerVideo
