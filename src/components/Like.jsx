"use server"
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/server";

 async function getlike() {
    const prisma = new PrismaClient();
    const count = await prisma.like.count(
        {
            where: {
                videoId: "cljepnxez0009ur380ddht8qh"
        }
    }
    
      
    
    );
  
    return count;
}
export default async function Like() { 
   const count = await getlike();
    return (
        <div>  : ok </div>
    )
}
