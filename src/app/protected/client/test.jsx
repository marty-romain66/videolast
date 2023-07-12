"use server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default async function test() {
    const profile = await prisma.profile.findUnique({
        where: {
            userId: "cliopxfvk0000urm8kuw2cnhv"
        }
    })




  return (
    <div> {profile.bio} </div>
  )
}

