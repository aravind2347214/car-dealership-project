import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CarsPage from './pages/CarsPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import CarComparePage from './pages/CarComparePage';
import CustomerStoriesPage from './pages/CustomerStoriesPage';
import DealerLocatorPage from './pages/DealerLocatorPage';
import { useEffect, useState } from 'react';
import AdminPanel from './pages/AdminPanel';
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
 
  useEffect(()=>{
    AOS.init();
    // AOS.init({
    //   offset: 200,
    //   duration: 600,
    //   easing: 'ease-in-sine',
    //   delay: 100,
    // });
  })
  const[login,setLogin]=useState(false)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/login" element={<LoginPage login={login} setLogin={setLogin}/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/cars" element={<CarsPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/admin-panel" element={<AdminPanel login={login} setLogin={setLogin}/>}/>
      <Route path="/faq" element={<FAQPage/>}/>
      <Route path="/car-compare" element={<CarComparePage/>}/>
      <Route path="/customer-stories" element={<CustomerStoriesPage/>}/>
      <Route path="/dealer-locator" element={<DealerLocatorPage/>}/>
      <Route path="/compare-cars" element={<CarComparePage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
