import { PrismaClient } from ".prisma/client";
import {hash} from 'bcrypt'

const prisma = new PrismaClient({log: ["query"]})

export default async function create(req,res){
    if(req.method === "POST"){
  
   try {
     const  admin  = req.body 
     
     hash(admin.password, 10,async function(err, hash) {
      admin.password = hash  
     const Admin = await prisma.admin_entity.create({
         data:admin
     })
    
    res.json(Admin)
});
   }
   catch(e){
  
    res.json(e)
   }finally {
    prisma.$disconnect()
   }
}
  else {
      res.status(504).json('method should be POST')
  }
}