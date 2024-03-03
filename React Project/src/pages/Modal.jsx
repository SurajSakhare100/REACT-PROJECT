import { faCancel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Modal() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-[400px] h-[300px] bg-blue-200 rounded-2xl border py-2 px-4 shadow-lg'>
        <div className='w-full h-full flex items-center justify-center gap-2 relative'>
            <div className='absolute right-0 top-2'> <FontAwesomeIcon icon={faCancel}/></div>
            <div className='text-3xl'>Modal Pop up</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
