import { PrismaClient } from ".prisma/client";
import {hash} from 'bcrypt'

const prisma = new PrismaClient({log: ["query"]})

export default async function create(req,res){
  
   try {
     const  user  = req.body 
     
     hash(user.password, 10 ,async function(err,hash) {
      // Store hash in your password DB.
    
     console.log(user) 
     
     const User = await prisma.user_entity.create({
         data:user
     })
    
    res.json(User)
  });
   }catch(e){
   console.log(e)
    res.json(e)
   }finally {
    prisma.$disconnect()
   }

}