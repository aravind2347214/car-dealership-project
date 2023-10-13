import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home(props) {
  const{login,setLogin}=props
  return (
    <>
    <Navbar activeTab="home" login={login}/>
    <div className='herosection mt-[-100px] ' >
      <div className='bg-[#0000005e] mt-32 pt-[300px] pb-14 px-5 text-left'>
      <div className='font-extrabold text-[70px] text-white'  data-aos="fade-up">What is car dealership?</div>
      <div className='w-1/2 text-white text-[20px]'  data-aos="fade-up">A car dealership is a business that sells new or used cars at the retail level, based on a dealership contract with an automaker or its sales subsidiary. Car dealerships also often sell spare parts and automotive maintenance services.
      </div>
     </div>
    </div>
    <div className='flex flex-row justify-end p-5  text-right bg-[#7289DA] overflow-x-hidden'>
      <div className='flex flex-col w-1/2 p-1 '  data-aos="fade-left">

      <div className='font-extrabold text-[70px] text-white  ' data-aos="fade-up">What do we do?</div>
      <div className=' text-white text-[20px] w-full '>We, at our dealership site, help you filter cars based on your preferences and narrow down your choices. We also help you choose a dealer based on your convenience.</div>
      </div>
      </div>

      <div className='bg-red-500 herosection  ' >
      <div className='bg-[#0000005e]  pt-[300px] pb-14 px-5 text-left overflow-x-hidden' data-aos="fade-right" >
      <div className='font-extrabold text-[70px] text-white'data-aos="fade-up">About Us</div>
      <div className='w-1/2 text-white text-[20px]' >
      At our dealership, we believe in providing our customers with the finest selection of vehicles and a stress-free buying experience. We are committed to delivering the highest standards of professionalism and integrity in everything we do.
<br/>
Thank you for considering our dealership for your automotive needs. We look forward to serving you!
      </div>
     </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default Home