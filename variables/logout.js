
import Router from "next/router"


export async function autho(url,ctx){
    const cookie =  ctx.req?.headers.cookie
    const resp = await fetch(url,{
      headers: {
         cookie: cookie
       }
    })
   
    if(resp.status === 200 && !ctx.req ){
    Router.replace("/admin/dashborad")
    return{}
    }
  
    if(resp.status === 200 && ctx.req){
      ctx.res?.writeHead(302,{
        Location: "/admin/dashborad"
      })
      ctx.res?.end()
      return;
    }
    
    const json = await resp.json()
    return  json
}