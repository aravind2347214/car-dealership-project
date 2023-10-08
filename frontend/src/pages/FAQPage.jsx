import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SingleQuestion from '../components/SingleQuestion'

function FAQPage() {
  const questions=[
    {question:"q1 some randon shit",answer:"some answer for qn1",qId:"q1"},
    {question:"q2 some randon shit",answer:"some answer for qn2",qId:"q2"},
    {question:"q3 some randon shit",answer:"some answer for qn3",qId:"q3"},
    {question:"q4 some randon shit",answer:"some answer for qn4",qId:"q4"},
    {question:"q5 some randon shit",answer:"some answer for qn5",qId:"q5"}
  ]
  const [activeQuestion,setActiveQuestion]=useState('')
  return (
    <>
    <Navbar activeTab="faq"/>
    <div className='mt-20'>
      <div className='text-[50px] font-extrabold text-[#7289DA] text-center'>
        Frequently Asked Questions
      </div>
      <br/>
      <div className='bg-red-500 w-[80%] mx-auto p-1'>
        {
          questions.map((item)=>(
            <SingleQuestion data={item} activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion}/>
          )
          )
}
      </div>
    </div>
    <Footer/>
    </>

  )
}

export default FAQPage