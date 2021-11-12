import React,{useState} from 'react';
import Router from "next/router"
import 'tailwindcss/tailwind.css'
import { autho } from '../../variables/logout';

 const Login = () => {
     const [message, setMessage] = useState('')
   function handleFormSubmit(e) {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;
       fetch('/api/admine/login', { 
           method: 'POST',
           headers: {
               'Content-type' : 'application/json'
           },
           body : JSON.stringify({
               email,
               password
           })

       } )
       .then((res)=> res.json())

        .then((data)=>{


    
        if(data.message=== 'welcome' ){
            Router.replace("/admin/dashboard")
          }
       })
    .catch((err)=>{
            console.log(err)
    })
      

  

    };
    return (
        
        <div className='h-screen flex bg-gray-bg1'>
           
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
Login.getInitialProps = async (ctx) =>{
    const json = await autho( process.env.NEXT_PUBLIC_PATH + "/api/Workers/findallWorkers",ctx)
  return {people : json}
}