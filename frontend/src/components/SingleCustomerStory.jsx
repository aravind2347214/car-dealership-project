import React from 'react'

function SingleCustomerStory(props) {
    const{data}=props
  return (
    <div className='w-[400px] bg-[#7289da13] p-2 rounded-sm max-h-[160px] flex flex-col shadow-md shadow-[#7289da68]'>
            {/* this represents the div for a single testimonial card with  */}
            <div className='p-2 italic text-ellipsis max-h-[100px]'>              
           {data.reviewcontent}
            </div>
            <div className='flex flex-row items-center px-2 py-2'>
            <img src={data.photo} alt=""  width={40} height={40} className='rounded-full'/>
            <div className=' ml-5 font-semibold text-[18px]'>{data.name}</div></div>
            </div>
  )
}

export default SingleCustomerStory