import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient({log: ["query"]})

export default async function find(req,res){
  
   try {
     
    console.log(req.body);

     const User = await prisma.user_entity.findUnique({
        where: {
            id:req.body.id,
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