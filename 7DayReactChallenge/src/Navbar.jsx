import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faCartArrowDown, faCartFlatbed, faCartShopping, faGlobe, faSearch, faShop } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div className='w-full h-[60px] shadow-xl'>
            <nav className="w-full h-full py-2 bg-black text-white p-4">
                <ul className='w-full h-full flex flex-row items-center justify-between'>
                    <i className="bi bi-bank w-[10px] text-white h-[10px]" ></i>
                    <li><NavLink to="/">You Tube</NavLink></li>
                    <li><NavLink to="/categories">Home</NavLink></li>
                    <li className='lg:w-1/2 lg:h-3/4 relative '>
                        <input
                            className='w-full h-full rounded-2xl outline-none text-black px-3 text-sm shadow-lg  bg-white '
                            type="text"
                            placeholder='Search for Anything' />
                            <div className=' top-1 right-2 w-[20px] h-[20px] absolute z-0'>
<FontAwesomeIcon icon={faSearch} className='text-black'/>
                                </div></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li className='hidden'><NavLink to="/productpage">
                        <button className='w-full h-ful text-sm font-bold rounded-sm py-1 px-2 shadow-md'></button></NavLink>
                    </li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                    <li><NavLink to="/shop">
                        <button className='w-full h-ful text-sm font-bold rounded-md py-1 px-2 shadow-md border bg-white'><FontAwesomeIcon icon={faCartShopping} className='text-md text-black'/></button></NavLink>
                    </li>
                    <li className='h-3/4'><NavLink to="/signup">
                        <button className='w-full h-full bg-black border text-sm font-bold rounded-sm py-1 px-2 shadow-md'>Sign Up</button></NavLink>
                    </li>
                    <li className='h-3/4'>
                        <NavLink to="/login">
                        <button className='w-full h-full bg-white rounded-sm text-black font-bold py-1 px-2 shadow-md'>Log in</button></NavLink>
                    </li>
                    <li className='h-3/4'><NavLink to="/globe">
                        <button className='w-full h-full bg-black border text-sm font-bold rounded-sm py-1 px-2 shadow-md'><FontAwesomeIcon icon={faGlobe}/></button></NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
