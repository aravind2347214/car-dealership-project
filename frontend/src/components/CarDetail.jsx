import React from 'react'

function CarDetail(props) {
    const{data}=props
  return (
    <div className='flex flex-col w-1/2 p-2 max-h-[550px] overflow-y-auto '>
    <img src={data.Photo} className='scale-[55%]' alt=""/>
    {/* <div className='w-full min-h-[350px] bg-blue-600'>image</div> */}
    <div className='font-bold text-[30px] text-center text-[#7289DA]'>{data.name}</div>
    <div className='flex flex-row flex-wrap gap-2 '>
      <div className='flex flex-col p-1 w-fit'>
        <div className='text-[14px] font-semibold'>Price Range</div>
        <div className='p-2 font-bold bg-[#7289da1d] rounded-sm w-full text-center'>{data.PriceRange}</div>
      </div>
      <div className='flex flex-col p-1 w-fit'>
        <div className='text-[14px] font-semibold'>Engine</div>
        <div className='p-2 font-bold bg-[#7289da1d] rounded-sm w-full text-center'>{data.Engine}</div>
      </div>
      <div className='flex flex-col p-1 w-fit'>
        <div className='text-[14px] font-semibold'>Power Output</div>
        <div className='p-2 font-bold bg-[#7289da1d] rounded-sm w-full text-center'>{data.PowerOutput}</div>
      </div>
      <div className='flex flex-col p-1 w-fit'>
        <div className='text-[14px] font-semibold'>Mileage</div>
        <div className='p-2 font-bold bg-[#7289da1d] rounded-sm w-full text-center'>{data.Mileage}</div>
      </div>
      <div className='flex flex-col p-1 w-fit'>
        <div className='text-[14px] font-semibold'>Seating Capacity</div>
        <div className='p-2 font-bold bg-[#7289da1d] rounded-sm w-full text-center'>{data.SeatingCapacity}</div>
      </div>
      <div className='flex flex-col p-1 w-fit'>
        <div className='text-[14px] font-semibold'>Transmission</div>
        <div className='p-2 font-bold bg-[#7289da1d] rounded-sm w-full text-center'>{data.Transmission}</div>
      </div>
      <div className='flex flex-col p-1 w-fit'>
        <div className='text-[14px] font-semibold'>Safety Features</div>
        <div className='p-2 font-bold bg-[#7289da1d] rounded-sm w-full text-center'>{data.SafetyFeatures}</div>
      </div>
      <div className='flex flex-col p-1 w-fit'>
        <div className='text-[14px] font-semibold'>Key Features</div>
        <div className='p-2 font-bold bg-[#7289da1d] rounded-sm w-full text-center'>{data.KeyFeatures}</div>
      </div>
    </div>



   </div>
  )
}

export default CarDetail