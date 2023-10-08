import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SingleCustomerStory from '../components/SingleCustomerStory'
import { PlusIcon } from '../components/Icons'
import YourStoryModal from '../components/YourStoryModal'

function CustomerStoriesPage() {
  const reviews=[
    {name:"Reviewer Name",photo:"./images/testi1.jpeg", reviewcontent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus odit temporibus, vero quisquam a corporis delectus"},
    {name:"Reviewer Name",photo:"./images/testi1.jpeg",reviewcontent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus odit temporibus, vero quisquam a corporis delectus"},
    {name:"Reviewer Name",photo:"./images/testi1.jpeg",reviewcontent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus odit temporibus, vero quisquam a corporis delectus"},
    {name:"Reviewer Name",photo:"./images/testi1.jpeg",reviewcontent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus odit temporibus, vero quisquam a corporis delectus"},
    {name:"Reviewer Name",photo:"./images/testi1.jpeg",reviewcontent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus odit temporibus, vero quisquam a corporis delectus"},
    {name:"Reviewer Name",photo:"./images/testi1.jpeg",reviewcontent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus odit temporibus, vero quisquam a corporis delectus"}

  ]

  const [yourStoryModal,setYourStoryModal]=useState(false)


  return (
    <>
    <Navbar activeTab="customer-stories"/>
    <div className='mt-20 w-[90%] mx-auto flex flex-col mb-12 relative'>

      <div className='text-[50px] font-extrabold text-[#7289DA] text-center'>Customer Stories</div>
        <div className='flex flex-row flex-wrap justify-center gap-4 p-2 mx-auto w-fit'>
          {
            reviews.map((node)=>(
              <SingleCustomerStory data={node}/>
            ))
          }
          </div>

          <div className='mx-auto mt-10 w-fit'>
            <button
            onClick={()=> setYourStoryModal(true)}
             className='text-[#7289DA] border-transparent border-2 justify-between transition delay-100 hover:border-[#7289DA] rounded-full px-4 flex flex-row items-center gap-2 p-2 font-semibold'>Tell Your Story
              <PlusIcon/>
            </button>
            
          </div>
          {yourStoryModal&&
          <YourStoryModal setYourStoryModal={setYourStoryModal}/>
          }
        </div>
    <Footer/>
    </>
  )
}

export default CustomerStoriesPage