"use server"
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/server";
const prisma = new PrismaClient();
export default async function Fetch() {
// const Fetch = async (id) => {
    const data = await prisma.user.findUnique({
        where: {
        id: "clj9zv9q60000urtgo9sxwzki"
        }
    });
   <div>{data?.name}</div>
    }



