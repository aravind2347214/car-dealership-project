import React from 'react'

function SingleCustomerStory(props) {
    const{data}=props
  return (
    <div className='w-[400px] bg-[#7289da13] p-2 rounded-sm  flex flex-col shadow-md shadow-[#7289da68]'>
            {/* this represents the div for a single testimonial card with  */}
            <div className='p-2 italic text-ellipsis  flex-1'>              
           {data.reviewContent}
            </div>
            <div className='flex flex-row items-center px-2 py-2'>
            {/* <img src={data.photo} alt=""  width={40} height={40} className='rounded-full'/> */}
            <div className='w-[40px] h-[40px] text-[20px] rounded-full bg-slate-300 text-[#7289da] flex items-center justify-center font-bold border border-[#7289da]'>{data.reviewerName[0]}</div>
            <div className=' ml-4 font-semibold text-[16px] text-[#7289da]'>{data.reviewerName}</div></div>
            </div>
  )
}

export default SingleCustomerStory