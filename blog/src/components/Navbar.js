'use client'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='cursor-pointer container mx-auto px-5 flex justify-between py-4 items-center z-50'>
      <div>
        <Link href={'/'} className='text-primary text-3xl font-bold hover:bg-primary p-2 border-md hover:text-white transition-all duration-300'>
        Blog Site
        </Link>
      </div>
      <nav className='transition-all duration-300 mt-[56pxz lg:mt-0 [49] bg-primary lg:bg-transparent flex flex-col w-full lg:w-auto lg:flex-row justify-center lg:justify-end fixed top-0 bottom-0 -right-full lg:static flex gap-x-9 items-center'>
        <ul className='z-50 gap-y-5 items-center flex gap-x-5 flex flex-col lg:flex-row font-semibold gap-x-2'>
          <li>
            <Link className='text-orange-300 text-2xl font-bold hover:bg-orange-700 p-2 border-md hover:text-white transition-all duration-300' href={'/'}>Home</Link>
          </li>
          <li>
            <Link className='text-orange-300 text-2xl font-bold hover:bg-orange-700 p-2 border-md hover:text-white transition-all duration-300' href={'/about'}>About</Link>
          </li>
          <li>
            <Link className='text-orange-300 text-2xl font-bold hover:bg-orange-700 p-2 border-md hover:text-white transition-all duration-300' href={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar