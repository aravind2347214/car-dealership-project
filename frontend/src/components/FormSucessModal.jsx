import React from 'react'

function FormSucessModal(props) {
    const{setModal,message,heading}=props

    const closeModalHandler=()=>{
        setModal(false)
    }
  return (
    <div className='fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full bg-[#00000065]' onClick={closeModalHandler}>
        <div onClick={(e)=>{e.stopPropagation()}} className='w-[500px] flex flex-col bg-white p-3 rounded-md gap-3'>
        <div className='font-bold text-[25px] text-[#7289DA]' >{heading}</div>
        <div className='p-4'>{message}</div>
         <div className='flex justify-end '>
            <button type="button"  className=' px-[32px] py-[8px] bg-[#7289DA] hover:shadow-lg hover:scale-105 rounded-md font-semibold text-white' onClick={closeModalHandler}>Close</button>
          </div>
        </div>
    </div>
  )
}

export default FormSucessModal