import { PrismaClient } from ".prisma/client";
import {authenticated} from "../Auth"

const prisma = new PrismaClient({log: ["query"]})

export default async function find(req,res){
  
   try {
     const  worker  = req.body 
   

     const Worker = await prisma.worker_entity.findMany({
         where: { 
             isAvailable : true
         }
     })
  
    res.send(Worker)
     
   }catch(e){
   console.log(e)
    res.json(e)
   }finally {
    prisma.$disconnect()
      }

}