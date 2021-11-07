import { PrismaClient } from ".prisma/client";
import {hash} from 'bcrypt'

const prisma = new PrismaClient({log: ["query"]})

export default async function create(req,res){
  
   try {
     const  request  = req.body 
     
      // Store hash in your password DB.
    
     console.log(user) 
     
     const Request = await prisma.request_entity.create({
         data:request
     })
    
    res.json(Request)
 
   }catch(e){
   console.log(e)
    res.json(e)
   }finally {
    prisma.$disconnect()
   }

}