import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CarsPage from './pages/CarsPage';
import ContactPage from './pages/ContactPage';
import UserProfilePage from './pages/UserProfilePage';
import FAQPage from './pages/FAQPage';
import CarComparePage from './pages/CarComparePage';
import CustomerStoriesPage from './pages/CustomerStoriesPage';
import DealerLocatorPage from './pages/DealerLocatorPage';
import { useState } from 'react';

function App() {
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
      <Route path="/user-profile" element={<UserProfilePage/>}/>
      <Route path="/faq" element={<FAQPage/>}/>
      <Route path="/car-compare" element={<CarComparePage/>}/>
      <Route path="/customer-stories" element={<CustomerStoriesPage/>}/>
      <Route path="/dealer-locator" element={<DealerLocatorPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
