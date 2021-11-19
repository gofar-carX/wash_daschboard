import { PrismaClient } from ".prisma/client";
import {compare} from 'bcrypt'
import {sign} from 'jsonwebtoken'
import cookie from 'cookie'
const prisma = new PrismaClient({log: ["query"]})
export default async function login(req,res){
    if(req.method === "POST"){
   try {
     
       
    console.log('hello')
      
          res.setHeader('Set-Cookie',cookie.serialize('auth','',{ 
            httpOnly: true,
            secure:process.env.Node_env ==! 'development',
            sameSite: 'strict',
            maxAge: 36000,
            path: '/'
          } ))
          res.json({message : 'welcome'})
      
     
   }
   catch(e){
    res.json({message : 'something went'})
   }finally {
    prisma.$disconnect()
   }
}
  else {
      res.status(504).json('method should be POST')
  }
}