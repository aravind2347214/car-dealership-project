import React from 'react'

function YourStoryModal(props) {
    const {setYourStoryModal}=props

    const closeModalHandler=()=>{
        setYourStoryModal(false)
    }
  return (
    <div className='fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full bg-[#00000065]' onClick={closeModalHandler}>
        <div onClick={(e)=>{e.stopPropagation()}} className='w-[500px] flex flex-col bg-white p-3 rounded-md gap-3'>
        <div className='font-bold text-[25px] text-[#7289DA]' >Tell Us Your Feedback</div>
        <input className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA]' type="text"  placeholder='Your Name'/>
            <textarea className='p-2 rounded-md bg-gray-100 focus:outline-[#7289DA] resize-none' type="password" rows={7}  placeholder='Write your review'/>
          <div className='flex justify-end '>
            <button type="button"  className=' px-[32px] py-[8px] bg-[#7289DA] hover:shadow-lg hover:scale-105 rounded-md font-semibold text-white'>Submit</button>
          </div>

        </div>
    </div>
  )
}

export default YourStoryModal