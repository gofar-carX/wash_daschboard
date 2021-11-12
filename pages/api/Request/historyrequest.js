import { PrismaClient } from ".prisma/client";
import { number } from "prop-types";

const prisma = new PrismaClient({log: ["query"]})
import {authenticated} from "../Auth"

export default authenticated(async function find(req,res){
  if(req.method === "GET"){

    try {
      const  request  = req.body 
      
      
      
      const Request = await prisma.request_entity.findMany(
        {include : {user_entity:true,worker_entity:true},
        where:{NOT :  {workerId: null}}
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
  else {
    res.status(504).json('method should be Get')
  }
})