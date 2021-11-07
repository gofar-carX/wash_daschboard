import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient({log: ["query"]})

export default async function find(req,res){
  
   try {
     

     const User = await prisma.user_entity.findUnique({
         
        where: {
            id:3,
          }
        
      })
    
    res.json(User)
     
   }catch(e){
   console.log(e)
    res.json(e)
   }finally {
    prisma.$disconnect()
      }

}