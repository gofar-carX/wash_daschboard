import { PrismaClient } from ".prisma/client";
import {authenticated} from "../Auth"

const prisma = new PrismaClient({log: ["query"]})

export default authenticated(async function find(req,res){
  if(req.method === "GET"){

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
  else {
    res.status(504).json('method should be GET')
  }

})