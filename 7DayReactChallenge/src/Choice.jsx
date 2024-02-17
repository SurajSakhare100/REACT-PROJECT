import React from 'react'

function Choice() {
    return (
        <div className='w-full px-24 py-4'>
            <div className='w-full h-full' >
                <h1 className='text-xl font-bold'>Top categories</h1>
                <ul className='flex lg:justify-between flex-wrap lg:gap-10 gap-6m py-4'>
                    <li className='lg:w-[300px] lg:h-[300px] hover:shadow-xl '>
                        <img src="/Categorie Img/img1.jpg" className='w-full h-full hover:rounded-lg' alt="" />
                        <p className='font-bold'>Design</p>
                    </li>
                    <li className='lg:w-[300px] lg:h-[300px] hover:shadow-xl'>
                        <img src="/Categorie Img/img2.jpg" className='w-full h-full hover:rounded-lg' alt="" />
                        <p className='font-bold'>Development</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Choice
