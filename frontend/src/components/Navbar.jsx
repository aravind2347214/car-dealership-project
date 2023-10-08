import React from 'react'
import { Link } from 'react-router-dom'
import { Logo, UserIcon } from './Icons';

function Navbar(props) {
    const{activeTab}=props;
    // var login=true; 
    var login=false; 


    
  return (
    <div className={`z-10 flex flex-row items-center justify-between w-full p-3 bg-[#7289DA] fixed top-0 left-0 `}>
        <div><Link to="/" className='flex flex-row items-center gap-2 font-serif font-bold text-[20px] text-white'>CarDealer</Link></div>
        <div className='flex flex-row justify-between w-1/2 item-center'>
        <div className='flex flex-row justify-between flex-1'>
            <div className={`flex flex-row p-1 ${activeTab==="cars"?"text-white font-bold":"text-[#cacaca]"} hover:text-gray-100`}><Link to="/cars">Cars</Link> </div>
            <div className={`flex flex-row p-1 ${activeTab==="dealer-locator"?"text-white font-bold":"text-[#cacaca]" } hover:text-gray-100`}><Link to="/dealer-locator">Dealer</Link></div>
            <div className={`flex flex-row p-1 ${activeTab==="contact"?"text-white font-bold":"text-[#cacaca]" } hover:text-gray-100`}><Link to="/contact">Contact</Link></div>
            <div className={`flex flex-row p-1 ${activeTab==="customer-stories"?"text-white font-bold":"text-[#cacaca]"} hover:text-gray-100`}><Link to="/customer-stories">Stories</Link> </div>
            <div className={`flex flex-row p-1 ${activeTab==="faq"?"text-white font-bold":"text-[#cacaca]" } hover:text-gray-100`}><Link to="/faq">FAQs</Link></div>
        </div>
        {!login?
        <div className='flex flex-row  w-[40%] justify-center gap-3'>
            <div className={` px-3 py-1 hover:bg-white rounded-md hover:text-[#7289DA] font-semibold bg-[#dadada82] text-white transition duration-[0.5s] ${activeTab==="login"?"hidden":""} `}><Link to="/login">Login</Link></div>
            <div className={` px-3 py-1 border border-transparent rounded-md text-[#cacaca] hover:border-white hover:text-white transition duration-[0.5s] ${activeTab==="register"?"hidden":""}`}><Link to="/register">Register</Link></div>
        </div>:
        <div className={` w-[40%] p-1 flex justify-end items-center gap-2 ${activeTab==="user-profile"?"text-white font-semibold":"text-[#cacaca]"} hover:text-gray-100`}>
            <Link to="/user-profile" className='flex flex-row gap-2'>
            <span>User</span>
            <UserIcon/>  
            </Link>
        </div>
        }

        </div>
    </div>
  )
}

export default Navbar