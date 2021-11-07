import { PrismaClient } from ".prisma/client";
import {compare} from 'bcrypt'
import {sign} from 'jsonwebtoken'

const prisma = new PrismaClient({log: ["query"]})





export default async function login(req,res){
    if(req.method === "POST"){
  
   try {
     
     const  admin  = req.body 
     const Admin = await prisma.admin_entity.findUnique({
      where: {
        email: admin.email,
      },
    })
     compare(admin.password, Admin.password, function(err, result) {
        if(!err && result ){
          const claims = {sub:Admin.id, admin: Admin.name}
          const jwt = sign(claims,process.env.SECRET,{ expiresIn: '1h' })
          res.json({authtoken : jwt})
        }else {
          res.json({message : 'something went wrong'})
        }
     });
     
    
    
    

   }
   catch(e){
  
    res.json({message : 'something went wrong'})
   }finally {
    prisma.$disconnect()
   }
}
  else {
      res.status(504).json('method should be POST')
  }
}
