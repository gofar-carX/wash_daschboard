import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient({log: ["query"]})

export default async function find(req,res){
  
   try {
   

     const User = await prisma.user_entity.findMany()
  
    res.send(User)
     
   }catch(e){
   console.log(e)
    res.json(e)
   }finally {
    prisma.$disconnect()
      }

}