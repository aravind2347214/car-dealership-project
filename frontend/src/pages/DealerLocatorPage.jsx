import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FormSucessModal from '../components/FormSucessModal';

function DealerLocatorPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dealer:'none'
  });
  const [successModal,setSucessModal]=useState(false)

  const [submitted, setSubmitted] = useState(false);

  const [validation, setValidation] = useState({
    name: null,
    email: null,
    phone: null,
    dealer:null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { name, phone ,email,dealer} = formData;
    const hasNumber = /\d/.test(name);
    const emailValid=emailRegex.test(email)
    const nameIsValid = name.trim()===""?false:true && !hasNumber;
    const dealerValid = dealer==="none"?false:true
    const phoneValid = /^[789]\d{9}$/.test(phone)
  
    setValidation({
      name: nameIsValid,
      dealer: dealerValid,
      email:emailValid,
      phone:phoneValid
    });
  
    return nameIsValid && phoneValid&& emailValid && dealerValid;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = handleValidation();
    setSubmitted(true);

    if (isValid) {
      setSucessModal(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        dealer:'none',
      }); 
    }
  };



  return (
    <>
    <Navbar activeTab="dealer-locator"/>
    <div className='mt-20 w-[95%] mx-auto relative'>
    {
        successModal?<FormSucessModal message="Locating a dealer Based on your Choice will be done shortly" heading="Form Was SucessFully Submitted " setModal={setSucessModal}/>:null
      }
      <div className='text-[50px] font-extrabold text-[#7289DA] text-left'>
        Locate a Dealer
      </div>
      <div className='flex flex-row justify-between p-1'>
        <form className='flex flex-col w-[35%] gap-2 p-2 ' onSubmit={handleSubmit}>
            <input className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]'
                value={formData.name}
                onChange={handleInputChange}
             name='name' type="text"  placeholder='Your Name'/>
            {submitted&& validation.name === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>Name cannot be empty and should not contain numbers.</div>}

            <input
                value={formData.email}
                onChange={handleInputChange}
             className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' name='email' type="text" placeholder='Email'/>
            {submitted&& validation.email === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>Invalid Email</div>}
            <input 
                value={formData.phone}
                onChange={handleInputChange}
            className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' name='phone' type="text" placeholder='Phone'/>
            {submitted&& validation.phone === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>Invalid Phone Number</div>}

            <select
                value={formData.dealer}
                onChange={handleInputChange}
             name="dealer" id="" className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA] text-[#7289DA]'>
              <option value="none" selected>No Dealer selected</option>
              <option value="SG Palaya Dealer">SG Palaya Dealer</option>
              <option value="Shivaji Nagar">Shivaji Nagar Dealer</option>
              <option value="Koramagala">Koramagala Dealer</option>
              <option value="Jayanagar Dealer">Jayanagar Dealer</option>
              <option value="Kammanahalli Dealer">Kammanahalli Dealer</option>
              <option value="Madiwala Dealer">Madiwala Dealer</option>
            </select>
            {submitted&& validation.dealer === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>Choose a dealer</div>}
          <div className='flex justify-end py-1 '>
            <button type="submit"  className=' px-[32px] py-[8px] bg-[#7289DA] hover:shadow-lg hover:scale-105 rounded-md font-semibold text-white'>Connect With Dealer</button>
          </div>
         </form>
      <div className='flex overflow-hidden border-2 border-[#7289DA] rounded-md h-[80%] w-1/2'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13541.036684537095!2d77.59190715234945!3d12.928142464888934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scar%20dealerships!5e0!3m2!1sen!2sin!4v1696793422696!5m2!1sen!2sin" width={800} height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    
      </div>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default DealerLocatorPage