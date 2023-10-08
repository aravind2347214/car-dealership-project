import React from 'react'

function SingleQuestion(props) {
    const{data,activeQuestion,setActiveQuestion}=props
    const activeHandler=(qId)=>{
        setActiveQuestion(qId)
    }
  return (
    <div className='bg-green-500 p-1 flex flex-col gap-1'>
    <div className='bg-blue-500 p-1 flex flex-row  items-center justify-between'>
     <div>{data.question}</div> 
     <button className='bg-pink-500 p-1' onClick={activeHandler(data.qId)}>expand</button>
    </div>
    {
        activeQuestion=== data.qId?
        <div className='bg-yellow-500 p-1'>
        {data.answer}
        </div>:null
    }
   

  </div>
  )
}

export default SingleQuestion