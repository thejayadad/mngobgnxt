'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'


const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
    
        if(username === '' || email === '' || password === ''){
            toast.error("Fill all fields")
            return
        }
    
        if(password.length < 6){
            toast.error("Password must be at least 6 characters")
            return
        }
    
        try {
            const res = await fetch('http://localhost:3000/api/register', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({username, email, password})
            })
    
            console.log(await res.json())
            if(res.ok){
                toast.success("Successfully registered the user")
                setTimeout(() => {
                    signIn()
                }, 1500)
                return
            } else {
                toast.error("Error occured while registering")
                return
            }
        } catch (error) {
            console.log(error)
        }
      }
  return (
    <section className="bg-gray-100 max-w-screen-sm m-auto p-8 flex flex-col align-center justify-center rounded-md">
        <h1 className="mb-4 w-full text-4xl font-light text-center text-gray-800 uppercase sm:text-5xl dark:text-white">
              Register
        </h1>
        
<div class="flex flex-col w-full px-4 py-8 bg-white rounded-md shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
    <div class="self-center text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
       Join US!
    </div>
    <div class="mt-8">
    <form onSubmit={handleSubmit}>
            <div class="mb-2">
                <div class="flex">
                       <input onChange={(e) => setEmail(e.target.value)} type="email"  class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email"/>
                    </div>
                </div>
                <div class="flex flex-col mb-6">
                    <div class="flex">
                        <input onChange={(e) => setUsername(e.target.value)} type="text" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Username"/>
                        </div>
                    </div>
                <div class="flex flex-col mb-6">
                    <div class="flex">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" id="sign-in-email" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your password"/>
                        </div>
                    </div>
                    <div class="flex w-full">
                        <button  class="py-2 px-4  bg-primary hover:bg-blue-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Register
                        </button>
                    </div>
                </form>
            </div>
            <div class="flex items-center justify-center mt-6">
                <a href="/login" target="_blank" class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                    <span class="ml-2">
                        Already have an account?
                    </span>
                </a>
            </div>
        </div>

    </section>
  )
}

export default Register