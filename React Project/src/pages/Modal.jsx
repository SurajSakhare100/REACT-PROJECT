import { faCancel, faL } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';

function Modal() {
  const [display,setDisplay]=useState(true);
  return (
    <>
    <div className={`w-full h-screen  items-center justify-center ${display?'hidden':'flex'}`}>
      <div className='w-[400px] h-[300px] bg-blue-200 rounded-2xl border py-2 px-4 shadow-lg'>
        <div className='w-full h-full flex items-center justify-center gap-2 relative'>
            <div className='absolute right-0 top-2'> <FontAwesomeIcon icon={faCancel} onClick={()=>{setDisplay((a)=>!a)}}/></div>
            <div className='text-3xl'>Modal Pop up</div>
        </div>
      </div>
    </div>
    <button onClick={()=>{setDisplay((a)=>!a)}} className={`text-xl px-2 py-1 bg-black text-white rounded-lg ${display?'':'hidden'}`}>Modal Pop up</button>
    </>
  )
}

export default Modal
