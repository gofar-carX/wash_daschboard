import { PrismaClient } from ".prisma/client";
import {authenticated} from "../Auth"


const prisma = new PrismaClient({log: ["query"]})

export default authenticated(async function update(req,res){
  if(req.method === "PUT"){

    try {
      const  requestId  = req.body.requestID
      const worker = req.body.worker
      const temp = req.body.temp + 15
      
       
        
              console.log(requestId)
        const Request = await prisma.request_entity.update(
          {
            where: {id : Number(requestId) },
            data :  {
              workerId : worker.id, 
              duration : `${temp} min`
            }
          }
          )
          console.log(Request)

          const  Worker = await prisma.worker_entity.update(
            {
              where: {id : worker.id },
              data: worker,
            },
            )
            
            
             res.json(Request)
            
          }catch(e){
            console.log(e)
            res.json(e)
          }finally {
            prisma.$disconnect()
          }
        }
        else {
          res.status(504).json('method should be Put')
        }

})