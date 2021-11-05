import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient({log: ["query"]})

export default async function create(req,res){
  
   try {
     const  user  = req.body 
     

     const User = await prisma.user_entity.create({
         data:user
     })
    
    res.json(User)
     
   }catch(e){
   console.log(e)
    res.json(e)
   }finally {
    prisma.$disconnect()
   }

}