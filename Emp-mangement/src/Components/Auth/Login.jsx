import React from 'react'

const Login = () => {
  return (
    <div className='flex  h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-400
        '>
            <form className='flex flex-col items-center justify-center'>
                <input type='email' placeholder='Enter Your Name'></input>
                <input type='password' placeholder='Enter Your Password'>

                </input>
            </form>
        </div>
      
    </div>
  )
}

export default Login
