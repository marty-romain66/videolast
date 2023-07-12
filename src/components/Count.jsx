"use server"
import React from 'react'
import { PrismaClient } from "@prisma/client";
export default async function Count() {
    const prisma = new PrismaClient();
    const count = await prisma.video.count();
    console.log(count);


  return (
    <div>
        <h1>Count</h1>
    </div>
        
  )
}
