"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete, AiFillLike, AiOutlineLike } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const PostDetails = (ctx) => {
    const [postDetails, setPostDetails] = useState("")
    const [isLiked, setIsLiked] = useState(false)
    const [postLikes, setPostLikes] = useState(0)

    const { data: session } = useSession()
    const router = useRouter()
    useEffect(() => {
        async function fetchPost() {
            const res = await fetch(`http://localhost:3000/api/post/${ctx.params.id}`, { cache: 'no-store' })
            const post = await res.json()

            setPostDetails(post)
            setIsLiked(post?.likes?.includes(session?.user?._id))
            setPostLikes(post?.likes?.length || 0)
        }
        session && fetchPost()
    }, [session])
  
   return (
    <div>PostDetails</div>
  )
}

export default PostDetails