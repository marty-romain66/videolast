"use server"
import { PrismaClient } from '@prisma/client'
import { NextResponse, NextRequest } from 'next/server'
const prisma = new PrismaClient()

export default async function post() {
   try {
    const profile = await prisma.profile.findUnique({
        where: {
            userId: "cliopxfvk0000urm8kuw2cnhv"
        }
    })
    console.log(profile)
    return NextResponse.redirect('/protected/client')
   }
    catch (e) {
        console.log(e)
    }
}

