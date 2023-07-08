"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete, AiFillLike, AiOutlineLike } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Comment from '@/components/Comment'


const PostDetails = (ctx) => {
    const [postDetails, setPostDetails] = useState("")
    const [isLiked, setIsLiked] = useState(false)
    const [postLikes, setPostLikes] = useState(0)
    const [commentText, setCommentText] = useState("")
    const [comments, setComments] = useState([])

    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        async function fetchComments(){
          const res = await fetch(`http://localhost:3000/api/comment/${ctx.params.id}`, {cache: 'no-store'})
          const comments = await res.json()
  
          setComments(comments)
        }
        fetchComments()
      }, [])
  


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

 

    const handleDelete = async () => {
        try {
            const confirmModal = confirm("Are you sure you want to delete your post?")

            if (confirmModal) {
                const res = await fetch(`http://localhost:3000/api/post/${ctx.params.id}`, {
                    headers: {
                        'Authorization': `Bearer ${session?.user?.accessToken}`
                    },
                    method: "DELETE"
                })

                if (res.ok) {
                    router.push('/')
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleLike = async () => {
        try {
            const res = await fetch(`https://localhost:3000/api/post/${ctx.params.id}/like`, {
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
    const handleComment = async () => {
        if(commentText?.length < 2){
            toast.error("Comment must be at least 2 characters long")
            return
        }

        try {
            const body = {
                blogId: ctx.params.id,
                authorId: session?.user?._id,
                text: commentText
            }

            const res = await fetch(`http://localhost:3000/api/comment`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.user?.accessToken}`
                },
                method: "POST",
                body: JSON.stringify(body)
            })

            const newComment = await res.json()

            setComments((prev) => {
                return [newComment, ...prev]
            })
            
            setCommentText("")
        } catch (error) {
            console.log(error)
        }
    }

  
   return (
    <>
    <section className="max-w-screen-sm m-auto">
    <div className="container px-5 py-12 mx-auto ">
    <div className="flex flex-wrap -m-12">
      <div className="p-12 flex flex-col">
      <h2 className="sm:text-3xl text-xl title-font font-medium text-gray-900 mt-4 mb-4 text-center">{postDetails.title}</h2>
      <div className="flex items-center justify-center mt-4 gap-x-5 pt-4 pb-5">
        { 
             postDetails?.authorId?._id.toString() === session?.user?._id.toString()
             ? (
                <>
             <Link href={`/post/edit/${ctx.params.id}`} className="px-3 py-2 rounded-md text-primary font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
              Edit <BsFillPencilFill style={{fontSize: "24px"}} />
              </Link>
              <button onClick={handleDelete} className="px-3 py-2 rounded-md text-primary font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
              Delete <AiFillDelete style={{fontSize: "24px"}} />
              </button>
          </>
        )

        : (
            <>
        
        <h2 className='text-center text-gray-400 mb-2'>Post By: {postDetails?.authorId?.username}</h2>
        </>
        )
        }
       </div>
        <span className="text-center py-2 px-2 rounded bg-indigo-50  text-indigo-500 text-xs font-medium tracking-widest">{postDetails.category}</span>
        <p className="leading-relaxed mb-8">
            {postDetails.desc}
        </p>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
           <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 cursor-pointer">
           {postLikes} {" "} {isLiked ? <AiFillLike size={16} onClick={handleLike} /> : <AiOutlineLike size={16} onClick={handleLike} />}         
    
          </span>
         </div>

    </div>
    </div>
    <h2 className='text-center'>Comment Section</h2>
        <div>
            <input 
            onChange={(e) => setCommentText(e.target.value)}
            value={commentText}
            className='w-full focus:outline-none p-8 mt-4' placeholder='Leave your comment here...'/>
        </div>
        <div>
            <button
            onClick={handleComment}
            className='px-6 py-2.5 rounded-md bg-primary mt-3 text-white hover:bg-blue-500 hover:text-white transition-all duration-300'
            >Comment</button>
        </div>
    <div>
    {
        comments?.length > 0
        ? comments
            .map((comment) => (   
            <Comment key={comment._id} comment={comment} setComments={setComments}/>
        ))
        : <h4 >Be the first one to leave a comment!</h4>
    }
    </div>
    </div>
    </section>
    </>
  )
}

export default PostDetails