import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../services/auth';

function Register() {

  const navigate = useNavigate();
  const [fullName,setFullName]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [confirm,setConfirm]=useState("");
  const [error,setError]=useState("");
  

    const handleSubmit = (e)=>{
      e.preventDefault();
      if (!fullName && !email && !password && !confirm){
        setError("please fill all fields");
        return
      }
      

      if(fullName.length<3){
        alert("the name must be longer than 3 symbols");
        return
      }

      if(!isNaN(fullName)){
        alert("Full name must include fonts too")
        return;
      }

      if(!email.includes ("@") && !email.includes (".")){
        alert("email invalid");
        return;
      }
      if(password.length < 6){
        alert("the password minimum is 6 characters");
        return
      }

      if(password !== confirm){
        alert("the passwords dosen't match");
        return
      }

      registerUser({fullName,email,password,confirm}).then((result)=>{
        console.log(result);
        navigate("/login")
      })
    }

    
  return (
    <main className='py-12 px-4'>
      <div className='max-w-md mx-auto'>
         <h1 className='text-2xl text-center mb-1'>Create an account</h1>
         <form onSubmit={handleSubmit} className='rounded-xl shadow-2xl border border-gray-200 space-y-5 p-5'>
            {error &&
            <p className='rounded-lg bg-red-300 text-red-700'>{error}</p>}
            <label htmlFor="">
              <span className='block text-sm font-medium text-gray-700 mb-1'>Full Name</span>
              <input 
              value={fullName}
              onChange={(e)=>{setFullName(e.target.value)}}
              type="text" className='w-full rounded-lg border border-gray-300 py-2' />
            </label>

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

            <label htmlFor="">
              <span className='block text-sm font-medium text-gray-700 mb-1'>Confirm Password</span>
              <input 
              value={confirm}
              onChange={(e)=>{setConfirm(e.target.value)}}
              type="password" className='w-full rounded-lg border border-gray-300 py-2' />
            </label>


              <button type='submit' className=" w-full mt-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg">Register</button>
            
         </form>
      </div>
    </main>
  )
}

export default Register