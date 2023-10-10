import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function LoginPage(props) {
 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [validation, setValidation] = useState({
    email: null,
    password: null,
  });

  const [submitted, setSubmitted] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleValidation = () => {
    const { email, password} = formData;
  
    const emailIsValid = email.trim()===""?false:true;
    const passwordIsValid = password.trim()===""?false:true;
  
    setValidation({
      email: emailIsValid,
      password: passwordIsValid,
    });
  
    return emailIsValid && passwordIsValid;
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const isValid = handleValidation();
    setSubmitted(true);
    if (isValid) {


      setFormData({
        email: '',
        password: '',
      }); 
    }

  }


  
  return (
    <>
    <Navbar activeTab="login"/>
    <div className='w-full p-10 mt-20 '>
      <form className='flex flex-col gap-2 p-5 mx-auto w-fit' onSubmit={handleSubmit}>
      <div className='font-extrabold text-[50px] text-[#7289DA]'>Welcome back :)</div>
        <input 
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="text"  placeholder='Email'/>
        {submitted&& validation.email === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>Username cannot be Empty</div>}

        <input 
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="password" placeholder='Password'/>
        {submitted&& validation.password === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>Password cannot be Empty</div>}

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