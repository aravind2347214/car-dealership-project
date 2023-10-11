import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { userDetails } from '../data/user';
import { useNavigate } from 'react-router';
function LoginPage(props) {
  const{login,setLogin}=props

  const adminDetails= userDetails;
  const navigate= useNavigate()
 
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });


  const [submitted, setSubmitted] = useState(false);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormData({ ...formData, [name]: value });
  };



  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(formData.username===adminDetails.username&&formData.password===adminDetails.password)
    {

      setLogin(true)
      navigate("/admin-panel")
    }
    else{
      alert("Username or Password is Incorrect");
    }
 
  }


  
  return (
    <>
    <Navbar activeTab="login"/>
    <div className='w-full p-10 mt-20 '>
      <form className='flex flex-col gap-2 p-5 mx-auto w-fit' onSubmit={handleSubmit}>
      <div className='font-extrabold text-[50px] text-[#7289DA]'>Welcome back Admin :)</div>
        <input 
          name="username"
          // value={formData.username}
          onChange={handleInputChange}
        className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="text"  placeholder='Email'/>

        <input 
          name="password"
          // value={formData.password}
          onChange={handleInputChange}
        className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="password" placeholder='Password'/>
        {/* {submitted&& validation.password === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>Password cannot be Empty</div>} */}

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