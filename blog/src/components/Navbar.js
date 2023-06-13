'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {signIn, signOut, useSession} from 'next-auth/react'

const Navbar = () => {
  const {data: session} = useSession()
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
        return !curState;
    })
}
  return (
    <header className='cursor-pointer container mx-auto px-5 flex justify-between py-4 items-center z-50'>
      <div>
        <Link href={'/'} className='text-primary text-3xl font-bold hover:bg-primary p-2 border-md hover:text-white transition-all duration-300'>
        Blog Site
        </Link>
      </div>
      <div  className="lg:hidden z-50">
        {navIsVisible ? ( <AiOutlineClose
         className="w-6 h-6"
         onClick={navVisibilityHandler}
        /> 
        
        ) : ( 
        <AiOutlineMenu
        className="w-6 h-6" onClick={navVisibilityHandler}
        />
    )}
    </div>
   
      <nav className={`${navIsVisible ? "right-0" : "right-full"}
        "transition-all duration-300 mt-[56pxz lg:mt-0 [49] bg-primary lg:bg-transparent flex flex-col w-full lg:w-auto lg:flex-row justify-center lg:justify-end fixed top-0 bottom-0 -right-full lg:static flex gap-x-9 items-center`}>
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
        {
            session ?.user

            ? (
                <>
                <Link
                href='/create-post'
                className='px-6 py-2.5 rounded-md bg-primary mt-3 text-white hover:bg-indigo-50 hover:text-indigo-500 transition-all duration-300'
                >Create Post</Link>
                <button onClick={() => {signOut()}} 
                className=' px-6 py-2.5 rounded-md bg-indigo-50 mt-3 text-indigo-500 hover:bg-primary hover:text-white transition-all duration-300'
                >Logout</button>

                </>
            ) : (
                <>
                <Link
                href='/login'
                className='px-6 py-2.5 rounded-md bg-primary mt-3 text-white hover:bg-blue-500 hover:text-white transition-all duration-300'
                >Login In</Link>
                <Link href='/register'
                className=' px-6 py-2.5 rounded-md bg-blue-500 mt-3 text-white hover:bg-primary hover:text-white transition-all duration-300'
                >Register</Link>
                                    
                </>
            )
        }


      </nav>
    </header>
  )
}

export default Navbar