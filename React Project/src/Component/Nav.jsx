import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
  return ( 
    <div className='bg-black h-[70px] w-full text-white px-4'>
      <ul className='flex gap-2 items-center justify-center h-full w-full'>
        <li>
          <NavLink to={'/home'} className={({isActive})=>`${isActive?`text-red-500`:''}`}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/about'} className={({isActive})=>`${isActive?`text-red-500`:''}`}>About</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'} className={({isActive})=>`${isActive?`text-red-500`:''}`}>Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav
