import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar activeTab="home"/>
    <Footer/>
    
    </>
  )
}

export default Home