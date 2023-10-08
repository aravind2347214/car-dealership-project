import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function LoginPage(props) {
  const{login,setLogin}=props
  const [formData,setFormData]=useState() 

  const handleSubmit=()=>{

  }
  
  return (
    <>
    <Navbar activeTab="login"/>
    <div className='w-full p-10 mt-20 '>
      <form className='flex flex-col gap-2 p-5 mx-auto w-fit' onSubmit={handleSubmit}>
      <div className='font-extrabold text-[50px] text-[#7289DA]'>Welcome back :)</div>
        <input className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="text"  placeholder='Username'/>
        <input className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="password" placeholder='Password'/>
      <div className='flex justify-center py-5 '>
        <button type="submit" className='px-[32px] py-[8px] bg-[#7289DA] hover:shadow-lg hover:scale-105 rounded-md font-semibold text-white'>Login</button>
      </div>
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default LoginPage