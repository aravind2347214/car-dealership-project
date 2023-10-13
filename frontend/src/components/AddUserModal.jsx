import axios from 'axios';
import React, { useState } from 'react'

function AddUserModal(props) {
  const {setModal,setSucessModal}=props

  



const [formData, setFormData] = useState({
  name:'',
  phone:'',
  gender:'',
  email: '',
  password: '',
  confirmPassword:'',
  dob:''
});

const closeModalHandler=()=>{
  setFormData({
    name:'',
    phone:'',
    gender:'',
    username: '',
    password: '',
    confirmPassword:'',
    dob:''

  });
  
  setModal(false)
}

const [submitted, setSubmitted] = useState(false);

const [validation, setValidation] = useState({
  name:null,
  phone:null,
  gender:null,
  email:null,
  password:null,
  confirmPassword:null,
  dob:null
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleValidation = () => {
 
  const {name,phone,gender,dob, email, password,confirmPassword} = formData;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const emailIsValid = emailRegex.test(email)
  const passwordIsValid = !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)?false:true;
  const hasNumber = /\d/.test(name);
  const nameIsValid = name.trim()===""?false:true && !hasNumber;
  const phoneIsValid = /^[789]\d{9}$/.test(phone)?true:false
  const genderIsValid = gender===null||gender===""?false:true
  const dobIsValid = dob===""?false:true
  const cpasswordIsValid = confirmPassword!==password?false:true
  setValidation({
    email: emailIsValid,
    password: passwordIsValid,
    name: nameIsValid,
    phone:phoneIsValid,
    dob: dobIsValid,
    gender: genderIsValid,
    confirmPassword: cpasswordIsValid,
  });

  return emailIsValid && passwordIsValid&&nameIsValid&&phoneIsValid&&genderIsValid&&cpasswordIsValid&dobIsValid;
};

const handleSubmit=async(e)=>{
  e.preventDefault();
  e.preventDefault();
  const isValid = handleValidation();
  setSubmitted(true);
  if (isValid) {


      const data={
        email: formData.email,
        password: formData.password,
        name: formData.name,
        phone:formData.phone,
        dob: formData.dob,
        gender: formData.gender,
      }
      axios.post("http://localhost:8000/add-user",data).then((res)=>{
        console.log(res)
        if(res.statusText==="Created")
        {
          closeModalHandler()
          setSucessModal(true)
          setFormData({
            name:'',
            phone:'',
            gender:'',
            username: '',
            password: '',
            confirmPassword:'',
            dob:''
      
          });
        }
      }).catch((err)=>{
        console.error('Error', err)
        alert("Some Error has occured")
      })
  }
  

}

  return (
    <>
        <div className='fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full bg-[#00000065]' >
        <div onClick={(e)=>{e.stopPropagation()}} className=' flex flex-col bg-white p-3 rounded-md gap-3'>
        <form autocomplete="off" className='flex flex-col gap-2 p-5 mx-auto w-[500px]' onSubmit={handleSubmit}>
      <div className='font-extrabold text-[30px] text-[#7289DA] text-center'>Add New User</div>
        <input
        name='name'
        value={formData.name}
        onChange={handleInputChange}
        
        className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="text"  placeholder='Name'/>
        {submitted&& validation.name === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>Name cannot be empty and should not contain numbers.</div>}

        <input
        name='phone'
        value={formData.phone}
        onChange={handleInputChange}
        className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="text"  placeholder='Phone Number'/>
        {submitted&& validation.phone === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>Invalid Phone Number</div>}

        <div className='flex flex-row justify-between'>
          <div className='flex flex-col'>
          <div className='flex flex-row gap-3 p-1 text-[#7289DA]'>
            <div className='flex flex-row items-center gap-1'>
              <input type="radio"
              name='gender'
              onChange={handleInputChange}
               value={"male"} className='cursor-pointer'/>
              <label htmlFor="gender">Male</label>
            </div>
            <div className='flex flex-row items-center gap-1' >
              <input 
              onChange={handleInputChange}
               type="radio" name="gender" value={"female"} className='cursor-pointer'/>
              <label htmlFor="gender">Female</label>
            </div>
            <div className='flex flex-row items-center gap-1' >
              <input
              onChange={handleInputChange}
               type="radio" name="gender" value={"other"} className='cursor-pointer'/>
              <label htmlFor="gender">Other</label>
            </div>
          </div>
          {submitted&& validation.gender === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>Choose A Gender</div>}
          </div>
          <div className='flex flex-col gap-1'>
            <input
            name='dob'
            value={formData.dob}
            onChange={handleInputChange}
             className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA] text-[#7289DA]' type="date"  id="" placeholder='Date of Birth' />
            {submitted&& validation.dob === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>Invalid Date</div>}
          
          </div>
        </div>
        <input 
        name='email'
        
        value={formData.email}
        onChange={handleInputChange}
        className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="text"  placeholder='Email'/>
        {submitted&& validation.email === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>Invalid Email</div>}

        <input
        name='password'
        value={formData.password}
        onChange={handleInputChange}
         className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="password" placeholder='Password'/>
        {submitted&& validation.password === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>[A-Z][a-z][0-9] minimum 8 charecters </div>}

        <input
        name='confirmPassword'
        value={formData.confirmPassword}
        onChange={handleInputChange} 
        className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="password" placeholder='Confirm Password'/>
        {submitted&& validation.confirmPassword === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>Does not match password</div>}

      <div className='flex justify-end py-5 gap-3 '>
      <button type="submit"  className=' px-[32px] py-[8px]   hover:bg-[#7289da1a] text-[#7289DA] hover:scale-105 rounded-md font-semibold ' onClick={closeModalHandler}>Cancel</button>
        <button type="submit"  className=' px-[32px] py-[8px] bg-[#7289DA] hover:shadow-lg hover:scale-105 rounded-md font-semibold text-white'>Add</button>
      </div>
      </form>

        
        </div>
    </div>
    
    </>
  )
}

export default AddUserModal