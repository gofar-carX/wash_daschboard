import Router from "next/router"


export async function MyGet (url,ctx){
    const cookie =  ctx.req?.headers.cookie
    const resp = await fetch(url,{
      headers: {
         cookie: cookie
       }
    })
   
    if(resp.status === 500 && !ctx.req ){
    Router.replace("/admin/Login")
    return{}
    }
  
    if(resp.status === 500 && ctx.req){
      ctx.res?.writeHead(302,{
        Location: "http://localhost:3000/admin/Login"
      })
      ctx.res?.end()
      return;
    }
    
    const json = await resp.json()
    return  json
}