 import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
 
 function RegisterPage() {
   return (
     <>
     <Navbar activeTab="register"/>
     <div className='w-full p-10 mt-20 '>
      <div className='flex flex-col gap-2 p-5 mx-auto w-[500px]'>
      <div className='font-extrabold text-[50px] text-[#7289DA] text-center'>Join Us !</div>
        <input className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="text"  placeholder='Name'/>
        <input className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="text"  placeholder='Phone Number'/>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-3 p-1 text-[#7289DA]'>
            <div className='flex flex-row gap-1 items-center'>
              <input type="radio" name="gender" value={"male"} className='cursor-pointer'/>
              <label htmlFor="gender">Male</label>
            </div>
            <div className='flex flex-row gap-1 items-center' >
              <input type="radio" name="gender" value={"female"} className='cursor-pointer'/>
              <label htmlFor="gender">Female</label>
            </div>
            <div className='flex flex-row gap-1 items-center' >
              <input type="radio" name="gender" value={"other"} className='cursor-pointer'/>
              <label htmlFor="gender">Other</label>
            </div>
          </div>
          <div>
            <input className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA] text-[#7289DA]' type="date" name="dob" id="" placeholder='Date of Birth' />
          </div>
        </div>
        <input className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="text"  placeholder='Username'/>
        <input className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="password" placeholder='Password'/>
        <input className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="password" placeholder='Confirm Password'/>
      <div className='flex justify-center py-5 '>
        <button type="button"  className=' px-[32px] py-[8px] bg-[#7289DA] hover:shadow-lg hover:scale-105 rounded-md font-semibold text-white'>Register</button>
      </div>
      </div>
    </div>
     <Footer/>
     </>
   )
 }
 
 export default RegisterPage