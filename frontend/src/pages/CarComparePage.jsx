import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { cars } from '../data/cars'
import CarDetail from '../components/CarDetail'

function CarComparePage(props) {
  const{login,setLogin}=props

  const [car1,setCar1]=useState({})
  const [car2,setCar2]=useState({})
  const handleSelect1 = (e) => {
    const { name, value } = e.target;
    
    const car1Details = cars.filter((node)=>(value===node.name))
    console.log(car1Details[0]);
    setCar1(car1Details[0])

   
  };

  const handleSelect2 = (e) => {
    const { name, value } = e.target;
    
    const car2Details = cars.filter((node)=>(value===node.name))
    console.log(car2Details[0]);
    setCar2(car2Details[0])

   
  };


  return (
    <>
    <Navbar activeTab="compare-cars" login={login}/>
    <div className='text-center text-[#7289DA] font-extrabold text-[50px] mt-16' >
      Compare
    </div>
    <div className=' p-1 flex flex-row'>
      <div className=' p-1 flex flex-col w-1/2 '>
      <select
            onChange={(e)=>handleSelect1(e)}
             name="car" id="" className=' mx-5 p-2 rounded-md bg-gray-100 focus:outline-[#7289DA] text-[#7289DA]'>
              <option value="none" selected>No Car selected</option>
              {
                cars.map((node)=>(
                  <>
                     <option value={node.name}>{node.name}</option>
                  </>
                ))
              }
            </select>
            {car1?.name?
             <CarDetail data={car1}/> :
             <div className='mx-auto font-bold text-[#ccc] mt-[20%]'>Choose Any Car</div>

            }
      </div>
      <div className=' p-1 flex flex-col w-1/2 '>
      <select
            onChange={(e)=>handleSelect2(e)}
             name="car" id="" className=' mx-5 p-2 rounded-md bg-gray-100 focus:outline-[#7289DA] text-[#7289DA]'>
              <option value="none" selected>No Car selected</option>
              {
                cars.map((node)=>(
                  <>
                     <option value={node.name}>{node.name}</option>
                  </>
                ))
              }
            </select>
            {car2?.name?
             <CarDetail data={car2}/> :
             <div className='mx-auto font-bold text-[#ccc] mt-[20%]'>Choose Any Car</div>

            }
      </div>
    </div>
    <Footer/>

    </>
  )
}

export default CarComparePage