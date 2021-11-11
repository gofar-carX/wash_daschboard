import { PrismaClient } from ".prisma/client";
import {authenticated} from "../Auth"

const prisma = new PrismaClient({log: ["query"]})

export default  authenticated(async function create(req,res){
    if(req.method === "POST"){

   try {
     const  worker  = req.body 
     
     
     const Worker = await prisma.worker_entity.create({
         data:worker
     })
    
    res.json(Worker)
   }
   catch(e){
   console.log(e)
    res.json(e)
   }finally {
    prisma.$disconnect()
   }
}
  else {
      res.status(504).json('method should be POST')
  }
})