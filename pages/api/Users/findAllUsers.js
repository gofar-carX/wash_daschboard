import { PrismaClient } from ".prisma/client";
import {authenticated} from "../Auth"

const prisma = new PrismaClient({log: ["query"]})

export default authenticated(async function find(req,res){
  if(req.method === "GET"){

    try {
      
      
      const User = await prisma.user_entity.findMany()
      
      res.send(User)
      
    }catch(e){
      console.log(e)
      res.json(e)
    }finally {
      prisma.$disconnect()
    }
  }
  else {
    res.status(504).json('method should be Get')
  }

})