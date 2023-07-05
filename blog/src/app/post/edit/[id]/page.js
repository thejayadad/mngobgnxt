'use client'

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Edit = (ctx) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [category, setCategory] = useState("Nature")
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        async function fetchPost() {
            const res = await fetch(`http://localhost:3000/api/post/${ctx.params.id}`)

            const post = await res.json()

            setTitle(post.title)
            setDesc(post.desc)
            setCategory(post.category)
        }
        fetchPost()
    }, [])

    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (status === 'unauthenticated') {
        return <p>
            Access Denied
        </p>
    }const handleSubmit = async (e) => {
        e.preventDefault()

        if(title === '' || category === '' || desc === ''){
            toast.error("All fields are required")
            return
        }

        try {
             const body = {
                title, 
                desc, category
            }
            
            const res = await fetch(`http://localhost:3000/api/post/${ctx.params.id}`, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${session?.user?.accessToken}`
                },
                method: "PUT",
                body: JSON.stringify(body)
            })

            if(!res.ok){
                throw new Error("Error has occured")
            }
            const post = await res.json()

            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <section className="bg-gray-100 max-w-screen-sm m-auto p-8">
        
    <div className="text-center mb-20">
  <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Update Post</h1>
  <div className="flex mt-2 justify-center">
    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
  </div>
</div>

<form onSubmit={handleSubmit}>
    <div>
        <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='w-full focus:outline-none p-2' placeholder='Title Your Work'/>
    </div>
    <div>
        <textarea
        value={desc} 
        onChange={(e) => setDesc(e.target.value)}
        className='w-full focus:outline-none pt-8 pb-8 pl-2 mt-4' placeholder='Share Your Thoughts...'/>
    </div>
    <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className='w-full focus:outline-none p-2 mt-4'>
        <option >Categories</option>
            <option value='Sports'>Sports</option>
            <option value='Money'>Money</option>
            <option value='News'>News</option>
            <option value='Tech'>Tech</option>
            <option value='Programming'>Programming</option>
        </select>
    </div>
    <div>
        <button
        className='px-6 py-2.5 rounded-md bg-primary mt-3 text-white hover:bg-blue-500 hover:text-white transition-all duration-300'
        >Post</button>
    </div>
    </form>
</section>
    )

}

export default Edit