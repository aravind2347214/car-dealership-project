import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { InfoIcon } from '../components/Icons'
import CarDetail from '../components/CarDetail'
import {  cars } from '../data/cars'

function CarsPage(props) {
  const{login,setLogin}=props

  const [activeCar,setActiveCar]=useState({})


  return (
    <>
    <Navbar activeTab="cars" login={login}/>
    <div className='mt-20 mb-12  w-[95%] mx-auto flex flex-row gap-1 p-1'>
     <div className='w-1/2 '>
      <div className='font-bold text-[50px]   text-[#7289DA]' data-aos="fade-right">Browse Cars</div>
      <div className='max-h-[460px] mt-5 overflow-y-auto  p-1 flex flex-col gap-2' data-aos="fade-up">
        {
          cars?.map((node)=>(
        <div  className={`flex flex-row justify-between p-3 rounded-md cursor-pointer  ${node.name===activeCar.name?"bg-[#7289DA] text-white":"bg-[#f7f7f7]"}`}
        onClick={()=>setActiveCar(node)}
        >
          <div>{node.name}</div>
          <div><InfoIcon/></div>
        </div>
          ))
        }
      </div>
     </div>
     {activeCar.name?
    <CarDetail data={activeCar}/>:
    <div className='mx-auto font-bold text-[#ccc] mt-[20%]' data-aos="fade-in">Choose Any Car</div>
    }
    </div>
    <Footer/>
    </>
  )
}

export default CarsPage