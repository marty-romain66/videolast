"use server"
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/server";

export default async function CountLike(id) {
    const prisma = new PrismaClient();
    const count = await prisma.like.count(
        {
            where: {
                videoId: id
        }
    }
    );
    console.log(count);
    return (
        <div> {count} : ok </div>
    )
}
