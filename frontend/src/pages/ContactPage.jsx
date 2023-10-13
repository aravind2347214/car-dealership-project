import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { LocationIcon, MailIcon, PhoneIcon } from '../components/Icons'
import ContactMap from '../components/ContactMap'
import FormSucessModal from '../components/FormSucessModal'
import axios from 'axios'

function ContactPage(props) {
  const{login,setLogin}=props
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });

  const [successModal,setSucessModal]=useState(false)

  const [submitted, setSubmitted] = useState(false);

  const [validation, setValidation] = useState({
    name: null,
    email: null,
    query: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { name, query ,email} = formData;
    const hasNumber = /\d/.test(name);
    const emailValid=emailRegex.test(email)
    const nameIsValid = name.trim()===""?false:true && !hasNumber;
    const queryIsValid = query.trim()===""?false:true
  
    setValidation({
      name: nameIsValid,
      query: queryIsValid,
      email:emailValid
    });
  
    return nameIsValid && queryIsValid&& emailValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = handleValidation();
    setSubmitted(true);

    if (isValid) {
      const data={
        name:formData.name,
        email:formData.email,
        query:formData.query,
      }
      axios.post("http://localhost:8000/add-contact-email",data).then((res)=>{
        console.log(res)
        if(res.statusText==="Created")
        {
          setSucessModal(true)
          setFormData({
            name: '',
            email: '',
            query: ''
          }); 
        }
      }).catch((err)=>{
        console.error('Error', err)
        alert("Some Error has occured")
      })
    }
  };

  return (
    <>
    <Navbar activeTab="contact" login={login}/>
    <div className='mt-20 w-[95%] mx-auto relative'>
      {
        successModal?<FormSucessModal message="Form Was SucessFully Submitted " heading="Contact Form Submitted" setModal={setSucessModal}/>:null
      }
      <div className='text-[50px] font-extrabold text-[#7289DA] text-left' data-aos="fade-down">
        Get in Touch With Us
      </div>
      <div className='flex flex-row justify-between p-1 overflow-y-auto'>
        <form className='flex flex-col w-[35%] gap-2 p-2 max-h-[500px]'
        data-aos="fade-up"
        onSubmit={handleSubmit}>
          <input
           name="name"
           
           value={formData.name}
           onChange={handleInputChange}
           className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="text"  placeholder='Your Name'/>
          {submitted&& validation.name === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>Name cannot be empty and should not contain numbers.</div>}

            <input className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="text" placeholder='Email'
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            />
            {submitted&&validation.email === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md'>Invalid Email</div>}
            <textarea 
             name="query"
             value={formData.query}
             onChange={handleInputChange}
            className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA] resize-none' type="password" rows={7}  placeholder='Query that you want to tell us'/>
             {submitted&&validation.query === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md'>Review cannot be empty.</div>}
          <div className='flex justify-end py-1 '>
            <button type="submit"  className=' px-[32px] py-[8px] bg-[#7289DA] hover:shadow-lg hover:scale-105 rounded-md font-semibold text-white'>Submit</button>
          </div>
          <div className='w  text-[#7289DA] p-2 flex flex-col gap-3 '>
            <div className='font-bold text-[18px]'>Reach us via</div>
            <div className='flex flex-row items-center'>
              <div className='font-bold text-[20px] mr-2'>
              <MailIcon/>
              </div> 
              <div>
                <a href = "mailto:cardealer@gmail.com" target="_blank" rel="noreferrer">cardealer@gmail.com</a>
              </div>
              
            </div>
            <div className='flex flex-col'>

            <div className='flex flex-row items-center'>
              <div className='font-bold text-[20px] mr-2'>
                <PhoneIcon/>
                </div> 
              <div>+91 8574937489</div>
            </div>
            <div className='flex flex-row items-center'>
              <div className='font-bold text-[20px] mr-2'>
                <LocationIcon/>
                </div> 
              <div>SG Palaya,Kormanagala,Bangaluru</div>
            </div>
            </div>

          </div>
         </form>
      <div
      data-aos="fade-in"
       className=' overflow-hidden border-2 border-[#7289DA] rounded-md h-[80%]'>
      <iframe
                        width="800"
                        height="500"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?q=12.9343422,77.6057293&hl=es&z=14&amp;output=embed"
                    >
                    </iframe>
      </div>

      </div>
    </div>
    
    
    <Footer/>
    </>
  )
}

export default ContactPage