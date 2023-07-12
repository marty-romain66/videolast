
"use server"
import { PrismaClient } from "@prisma/client";



const handle = async (e,id) => {
    console.log(id)
    const prisma = new PrismaClient();
    const test = await prisma.profile.update({
        data: {
            bio: e.get('name'),
            
        
        },
        where: {
            userId: id,
        },
    });
    console.log(test)
   
    return test
}
export default handle