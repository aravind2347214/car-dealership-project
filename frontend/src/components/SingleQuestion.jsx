import React from 'react'
import { Collapse, Expand } from './Icons'

function SingleQuestion(props) {
    const{data,activeQuestion,setActiveQuestion}=props
    // console.log(data);
    const activeHandler=(e,data)=>{
       if(activeQuestion===data.qId){
        setActiveQuestion(" ")
        
       }
       else{
         setActiveQuestion(data.qId)
       }
        console.log(data);
    }
  return (
    <div className='flex flex-col gap-1 p-1 my-1  bg-[#abbcf915] rounded-md'> 
       <div className='flex flex-row items-center justify-between p-1 font-bold text-[#7289da]'>
          <div>{data.question}</div> 
          <button className='p-1 ' onClick={(e)=>activeHandler(e,data)}>
            {activeQuestion===data.qId?
            <Collapse/>
            :
            <Expand/>
            }
          </button>
        </div>
    {
        activeQuestion===data.qId?
        <div className='p-3 rounded-md bg-white text-[#7289da]'>
        {data.answer}
        </div>:null
    }
  </div>
  )
}

export default SingleQuestion