import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SingleQuestion from '../components/SingleQuestion'

function FAQPage(props) {
  const{login,setLogin}=props
  const questions=[
    {question:"How can I contact your dealership for further inquiries?",
    answer:"You can use our ‘Contact Page’ for further enquiries. This page will contain a form or our email-id. You are allowed to use either one of the methods to get in touch, but please do not use both, as the request will be logged twie and you will be receiving twice the amount of calls and emails from our side. ",
    qId:"q1"},
    {question:"Can I compare cars on this site?",answer:"Yes, you are allowed to compare cars on this site.You can follow the steps. Select the ‘Cars’ option on the navigation bar. Select the car that you want to see. Click on the ‘Compare’ button. Select the car of choice from the list.You will be able to see a side-by-side comparisons of the cars available from our dealers.",
    qId:"q2"},
    {question:"What types of cars do you sell?",answer:"From pocket-friendly to the best-in class hatchbacks,luxury sedans,Multi-utility,SUVs are available in this dealership. You can find a list of the cars available in our dealership by navgating to the ‘Cars’ page from the navigation pane on the top of this page.You are free to explore the car collection that we make available to you in our dealership!",qId:"q3"},
    {question:"Can I purchase cars from this site ?",answer:"Unfortuately,we do not allow visitors of this page to purchase cars from the website. This is because we want the customer to feel the thrill and happiness they get from having an in-store experience.There are customers/visitors who might be even purchasing their first-ever car for their family, or even gifting a car to their loved ones. There are also the negative sides like data leaks,privacy issues and more. To ensure that the customer feels the joy of store visits of customers and safety of both the customer and us, we have decided to book and purchase cars from this website",qId:"q4"},
    {question:"So how do I purchase cars?",answer:"Customers are free to walk into our dealerships to book and/or purchase cars. To know which dealer you are close to, you can find the ‘Locate a Dealer’ option from the navigation bar on the top of our page and locate the dealer. You can also fill out the form from the same page and get in touch with a dealer of your choice!",qId:"q5"}
  ]
  const [activeQuestion,setActiveQuestion]=useState("q0")
  return (
    <>
    <Navbar activeTab="faq" login={login}/>
    <div className='mt-20  overflow-y-auto'>
      <div className='text-[50px] font-extrabold text-[#7289DA] text-center'>
        Frequently Asked Questions
      </div>
      <br/>
      <div className=' w-[50%] mx-auto p-1'>
        {
          questions.map((node)=>(
            <SingleQuestion key={node.qId} data={node} activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion}/>
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