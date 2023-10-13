import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SingleCustomerStory from '../components/SingleCustomerStory'
import { PlusIcon } from '../components/Icons'
import YourStoryModal from '../components/YourStoryModal'
import FormSucessModal from '../components/FormSucessModal'
import axios from 'axios'

function CustomerStoriesPage(props) {
  const{login,setLogin}=props

  const [successModal,setSucessModal]=useState(false)

  const getAllReviews=async()=>{
   await axios.get("http://localhost:8000/get-all-reviews").then((res)=>{
        console.log(res.data)
        setReviews(res.data)
      }).catch((err)=>{
        console.log(err)
      })


  }
  
  const [reviews,setReviews]=useState([])

  // const reviews=[
  //   {name:"Reviewer Name",photo:"./images/testi1.jpeg", reviewcontent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus odit temporibus, vero quisquam a corporis delectus"},
  //   {name:"Reviewer Name",photo:"./images/testi1.jpeg",reviewcontent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus odit temporibus, vero quisquam a corporis delectus"},
  //   {name:"Reviewer Name",photo:"./images/testi1.jpeg",reviewcontent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus odit temporibus, vero quisquam a corporis delectus"},
  //   {name:"Reviewer Name",photo:"./images/testi1.jpeg",reviewcontent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus odit temporibus, vero quisquam a corporis delectus"},
  //   {name:"Reviewer Name",photo:"./images/testi1.jpeg",reviewcontent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus odit temporibus, vero quisquam a corporis delectus"},
  //   {name:"Reviewer Name",photo:"./images/testi1.jpeg",reviewcontent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus odit temporibus, vero quisquam a corporis delectus"}

  // ]

  useEffect(()=>{
    if(reviews.length===0){
      getAllReviews()
    }
  },[])



  const [yourStoryModal,setYourStoryModal]=useState(false)

  useEffect(()=>{
    getAllReviews()
  })


  return (
    <>
    <Navbar activeTab="customer-stories" login={login}/>
    <div className='mt-20 w-[90%] mx-auto flex flex-col mb-12 relative'>
    {
        successModal?<FormSucessModal message="Form Was SucessFully Submitted " heading="New Review Added" setModal={setSucessModal}/>:null
      }

      <div className='text-[50px] font-extrabold text-[#7289DA] text-center' data-aos="fade-down">Customer Stories</div>
        <div className='flex flex-row flex-wrap justify-center gap-4 p-2 mx-auto w-fit'>
          {
            reviews.map((node)=>(
              <SingleCustomerStory data={node}/>
            ))
          }
          </div>

          <div className='mx-auto mt-1 w-fit' >
            <button
            onClick={()=> setYourStoryModal(true)}
             className='text-[#7289DA] border-transparent border-2 justify-between transition delay-100 hover:border-[#7289DA] rounded-full px-4 flex flex-row items-center gap-2 p-2 font-semibold'>Tell Your Story
              <PlusIcon/>
            </button>
            
          </div>
          {yourStoryModal&&
          <YourStoryModal setSucessModal={setSucessModal} successModal={successModal} setYourStoryModal={setYourStoryModal}/>
          }
        </div>
    <Footer/>
    </>
  )
}

export default CustomerStoriesPage