"use server"

import { Prisma } from '@prisma/client'

const primsa = new Prisma()

export default async function FetchData() {

    const data = await primsa.profile.findOne({
        where: {
            id: "clja04dvp0008urtgl7bv23li",
        },
    })
    console.log(data)
    return (
        <div>
            <h1>je suis le title</h1>
            </div>

    )
}
