import React, { useState } from 'react';

const Login = ({handleLogin}) => {
   
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    console.log("Form submitted");
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-400 p-20 rounded-xl'>
        <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
          <input
            required
            className='text-black outline-none bg-transparent border-2 border-emerald-500 text-xl py-4 px-5 rounded-full placeholder:text-black'
            type='email'
            placeholder='Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className='text-black outline-none bg-transparent border-2 border-emerald-500 text-xl py-4 px-5 rounded-full mt-4 placeholder:text-black'
            type='password'
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='submit'
            className='text-black outline-none border-none bg-emerald-500 text-xl py-4 px-5 rounded-full mt-6 mb-2'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
