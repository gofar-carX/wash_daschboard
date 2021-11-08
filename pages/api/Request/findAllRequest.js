import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient({log: ["query"]})

export default async function find(req,res){
  
   try {
     const  request  = req.body 
     

     const Request = await prisma.request_entity.findMany(
       {include : {user_entity:true}}
     )
    
    res.json(Request)
     
   }catch(e){
   console.log(e)
    res.json(e)
   }finally {
    prisma.$disconnect()
      }

}