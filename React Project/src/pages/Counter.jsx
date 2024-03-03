import React, { useState } from 'react'

function Counter() {
  const [num,setNum]=useState(0);
  const [greeted,setGreet]=useState(true);
  function added(){
    setNum((a)=>a+1)
  }
  function subbed(){
    setNum((a)=>a-1)
  }
  function greet(){
    setGreet(!greeted)
  }
  return (
    <div className='w-100 h-screen flex items-center justify-center flex-col gap-4'>
      <h2 className='text-3xl'>Counter app</h2>
      <div className='flex gap-4'>
      <button onClick={()=>{added()}} className='bg-red-500 px-6 py-1 rounded-2xl text-white'>Add</button>
      <button onClick={()=>{subbed()}} className='bg-black px-6 py-1 rounded-2xl text-white'>Sub</button>
      </div>
      <h3 className='text-xl'>{num}</h3>
      <button onClick={greet} className='bg-green-500 px-6 py-1 rounded-2xl text-white'>GREET ME!</button>
      <p>{`${greeted?"hello i am good !!":'how are you ?'}`}</p>
    </div>
  )
}

export default Counter
