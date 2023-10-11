import React from 'react'
import { Link } from 'react-router-dom'
import { Logo, UserIcon } from './Icons';

function Navbar(props) {
    const{activeTab,login}=props;
    // var login=true; 


    
  return (
    <div className={`z-10 flex flex-row items-center justify-between w-full p-3 bg-[#7289DA] fixed top-0 left-0 `}>
        <div><Link to="/" className='flex flex-row items-center gap-2 font-serif font-bold text-[20px] text-white'>CarDealer</Link></div>
        <div className='flex flex-row justify-between w-1/2 item-center'>
        <div className='flex flex-row justify-between flex-1'>
            <div className={`flex flex-row p-1 ${activeTab==="cars"?"text-white font-bold":"text-[#cacaca]"} hover:text-gray-100`}><Link to="/cars">Cars</Link> </div>
            <div className={`flex flex-row p-1 ${activeTab==="compare-cars"?"text-white font-bold":"text-[#cacaca]"} hover:text-gray-100`}><Link to="/compare-cars">Compare</Link> </div>
            <div className={`flex flex-row p-1 ${activeTab==="dealer-locator"?"text-white font-bold":"text-[#cacaca]" } hover:text-gray-100`}><Link to="/dealer-locator">Dealer</Link></div>
            <div className={`flex flex-row p-1 ${activeTab==="contact"?"text-white font-bold":"text-[#cacaca]" } hover:text-gray-100`}><Link to="/contact">Contact</Link></div>
            <div className={`flex flex-row p-1 ${activeTab==="customer-stories"?"text-white font-bold":"text-[#cacaca]"} hover:text-gray-100`}><Link to="/customer-stories">Stories</Link> </div>
            <div className={`flex flex-row p-1 ${activeTab==="faq"?"text-white font-bold":"text-[#cacaca]" } hover:text-gray-100`}><Link to="/faq">FAQs</Link></div>
            <div className={`flex flex-row p-1 ${activeTab==="admin-panel"?"text-white font-bold":"text-[#cacaca]" } hover:text-gray-100`}><Link to="/admin-panel">Admin Panel</Link></div>
        </div>
        </div>
    </div>
  )
}

export default Navbar