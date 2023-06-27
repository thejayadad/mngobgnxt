
'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'



const Post = ({ post: { title, desc, likes, category, authorId, _id } }) => {
    const { data: session } = useSession()
    const [isLiked, setIsLiked] = useState(false)
    const [postLikes, setPostLikes] = useState(0)
    useEffect(() => {
        session && likes && setIsLiked(likes.includes(session?.user?._id))
        session && likes && setPostLikes(likes.length)
      }, [likes, session])
    
      const handleLike = async () => {
        try {
          const res = await fetch(`http://localhost:3000/api/post/${_id}/like`, {
            headers: {
              'Authorization': `Bearer ${session?.user?.accessToken}`
            },
            method: 'PUT'
          })
    
          console.log(res)
          if (res.ok) {
            if (isLiked) {
              setIsLiked(prev => !prev)
              setPostLikes(prev => prev - 1)
            } else {
              setIsLiked(prev => !prev)
              setPostLikes(prev => prev + 1)
            }
          }
        } catch (error) {
          console.log(error)
        }
      }
  return (
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-4 mx-auto">
      <div className="flex flex-wrap -m-12">
        <div className="p-12 flex flex-col items-start">
          <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{category}</span>
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{title}</h2>
          <p className="leading-relaxed mb-8">
            {desc}
  
          </p>
          <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
            <Link href={`/api/post/${_id}`} className="text-indigo-500 inline-flex items-center">See More
             </Link>
            <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            {postLikes} {" "} {isLiked
              ? (<AiFillLike onClick={handleLike} size={20} />)
              : (<AiOutlineLike onClick={handleLike} size={20} />)}             
           </span>
           </div>
          <a className="inline-flex items-center">
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Arthur: {authorId.username}</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Post