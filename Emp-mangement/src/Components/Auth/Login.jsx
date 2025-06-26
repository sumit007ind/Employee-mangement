import React from 'react'

const Login = () => {
  return (
    <div className='flex  h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-400
        '>
            <form className='flex flex-col items-center justify-center'>
                <input className='text-black outline-none bg-transparent border-2 border-emerald-500  text-xl py -4 px-5 rounded-full placeholder:text-black' type='email' placeholder='Enter Your Name'></input>
                <input className='text-black outline-none bg-transparent border-2 border-emerald-500  text-xl py -4 px-5 rounded-full mt-4 placeholder:text-black' type='password' placeholder='Enter Your Password'>
 </input>
                <button className='text-black outline-none border-2 bg-emerald-500  text-xl py -4 px-5 rounded-full mt-6 mb-2 placeholder:text-black'>Login</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
