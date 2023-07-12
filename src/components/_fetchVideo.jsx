"use server"
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/server";



    export default async function FetchVideo() {
    const prisma = new PrismaClient();
    const video = await prisma.videos.findMany();
    return (
        <>
        <h2>video test</h2>
        {
            video.map((video) => (
                <div key={video.id}>
                    <h1>{video.name}</h1>
                   
                </div>
            ))
        }
        </>
    )
}

