import { PrismaClient } from ".prisma/client";
import {authenticated} from "../Auth"


const prisma = new PrismaClient({log: ["query"]})

export default authenticated(async function update(req,res){
  
   try {
     const  requestId  = req.body.requestID
     const worker = req.body.worker
     const temp = req.body.temp + 15
   
    
    
          const request = await prisma.request_entity.findUnique(
        {
          where: {id : Number(requestId) },
         },
     )
     request.workerId = worker.id 
     request.duration = `${temp} min`  

   


     const Request = await prisma.request_entity.update(
        {
          where: {id : request.id },
          data :  request 
         }
     )
     const  Worker = await prisma.worker_entity.update(
      {
         where: {id : worker.id },
         data: worker,
        },
     )
     console.log(Worker)
    
   //  res.json(Request)
 
   }catch(e){
   console.log(e)
    res.json(e)
   }finally {
    prisma.$disconnect()
   }

})