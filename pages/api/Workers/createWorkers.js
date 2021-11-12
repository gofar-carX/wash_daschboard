import { PrismaClient } from ".prisma/client";
import {authenticated} from "../Auth"
import {hash} from 'bcrypt'

const prisma = new PrismaClient({log: ["query"]})

export default  authenticated(async function create(req,res){
    if(req.method === "POST"){

   try {
     const  worker  = req.body 
     
     
     hash( worker.password, 10,async function(err, hash) {
      worker.password = hash 
     const Worker = await prisma.worker_entity.create({
         data:worker
     })
    
    res.json(Worker)
    }) }
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