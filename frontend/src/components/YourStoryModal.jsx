import axios from 'axios'
import React, { useState } from 'react'
import FormSucessModal from './FormSucessModal';

function YourStoryModal(props) {
  const{successModal,setSucessModal}=props
  const [formData,setFormData]=useState({
      name:'',
      review:''
    })
  // const [successModal,setSucessModal]=useState(false)
  const [submitted, setSubmitted] = useState(false);
  const [validation, setValidation] = useState({
    name: null,
    review: null,
  });

  const handleValidation = () => {
    const { name, review} = formData;
    const hasNumber = /\d/.test(name);
    const nameIsValid = name.trim()===""?false:true && !hasNumber;
    const reviewIsValid = review.trim()===""?false:true
  
    setValidation({
      name: nameIsValid,
      review: reviewIsValid,
    });
  
    return nameIsValid && reviewIsValid;
  };


    const {setYourStoryModal}=props

    const closeModalHandler=()=>{
        setYourStoryModal(false)
    }
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const isValid = handleValidation();
      setSubmitted(true);
  
      if (isValid) {
        const data={
          reviewerName:formData.name,
          reviewContent:formData.review,
        }
        axios.post("http://localhost:8000/add-review",data).then((res)=>{
          console.log(res)
          if(res.statusText==="Created")
          {
            setSucessModal(true)
            closeModalHandler()
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
    <div className='fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full bg-[#00000065]' onClick={closeModalHandler}>
      
        <form onSubmit={handleSubmit} onClick={(e)=>{e.stopPropagation()}} className='w-[500px] flex flex-col bg-white p-3 rounded-md gap-3'>
        <div className='font-bold text-[25px] text-[#7289DA]' >Tell Us Your Feedback</div>
            <input 
            onChange={handleInputChange} 
            name="name" 
            className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="text"  placeholder='Your Name'/>
            {submitted&& validation.name === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>Name cannot be empty and should not contain numbers.</div>}

            <textarea 
            onChange={handleInputChange} 
            name='review' 
            className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA] resize-none' type="password" rows={7}  placeholder='Write your review'/>
            {submitted&& validation.review === false && <div className='p-1 text-xs text-red-500 bg-red-100 rounded-md '>Review cannot be empty</div>}

          <div className='flex justify-end '>
            <button type="submit"  className=' px-[32px] py-[8px] bg-[#7289DA] hover:shadow-lg hover:scale-105 rounded-md font-semibold text-white'>Submit</button>
          </div>
        </form>
    </div>
  )
}

export default YourStoryModal