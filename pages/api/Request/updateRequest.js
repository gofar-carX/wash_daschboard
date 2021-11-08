import { PrismaClient } from ".prisma/client";


const prisma = new PrismaClient({log: ["query"]})

export default async function update(req,res){
  
   try {
     const  request  = req.body 
     
      // Store hash in your password DB.
    
    
     
     const Request = await prisma.request_entity.update(
        {
          where: {id : request.id },
          data :  request 
         }
     )
    
    res.json(Request)
 
   }catch(e){
   console.log(e)
    res.json(e)
   }finally {
    prisma.$disconnect()
   }

}