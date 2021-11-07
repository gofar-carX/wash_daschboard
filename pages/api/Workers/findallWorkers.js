import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient({log: ["query"]})

export default async function find(req,res){
  
   try {
     const  worker  = req.body 
     

     const Worker = await prisma.worker_entity.findMany()
    
    res.json(Worker)
     
   }catch(e){
   console.log(e)
    res.json(e)
   }finally {
    prisma.$disconnect()
      }

}