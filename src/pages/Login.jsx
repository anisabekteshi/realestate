import React, { useState } from 'react'
import { loginUser } from '../services/auth';

function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");

  const handleSubmit =(e)=>{
    e.preventDefault();
    setError("");
    loginUser(email,password)
    .then(()=>{
      window.location.href ="/";
    }).catch((error) =>{
      setError(error);
    })
  }
  return (
    <main className='py-12 px-4'>
      <div className='max-w-md mx-auto'>
         <h1 className='text-2xl text-center mb-1'>Sign In</h1>
         <form onSubmit={handleSubmit} className='rounded-xl shadow-2xl border border-gray-200 space-y-5 p-5'>
            {error &&
            <p className='rounded-lg bg-red-300 text-red-700'>{error}</p>}

            <label htmlFor="">
              <span className='block text-sm font-medium text-gray-700 mb-1'>Email</span>
              <input 
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              type="email" className='w-full rounded-lg border border-gray-300 py-2' />
            </label>

            <label htmlFor="">
              <span className='block text-sm font-medium text-gray-700 mb-1'>Password</span>
              <input 
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              type="password" className='w-full rounded-lg border border-gray-300 py-2' />
            </label>


              <button type='submit' className=" w-full mt-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg">Log In</button>
            
         </form>
      </div>
    </main>
  )
}

export default Login