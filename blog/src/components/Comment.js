import React from 'react'
import {useSession} from 'next-auth/react'
import {BsTrash} from 'react-icons/bs'

const Comment = ({comment, setComments}) => {
    const {data: session} = useSession()
    const token = session?.user?.accessToken

    const handleDeleteComment = async() => {
        try {
          await fetch(`http://localhost:3000/api/comment/${comment?._id}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            },
            method: "DELETE"
          })
    
          setComments(prev => {
            return [...prev].filter((c) => c?._id !== comment?._id)
          })
        } catch (error) {
          console.log(error)
        }
      }
  
    return (
  <section className="text-gray-600 body-font bg-white mt-6">
    <div className="container px-5 py-4 mx-auto">
      <div className="flex items-center mx-auto border-b pb-6 border-gray-200 sm:flex-row flex-col">
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">

          {session?.user?._id === comment?.authorId?._id && (
             <BsTrash onClick={handleDeleteComment} />
           )}
          </h2>
          <p className="leading-relaxed text-base">{comment?.text}</p>
          <h3 className="mt-3 text-indigo-500 inline-flex items-center">{comment?.authorId?.username}
          </h3>
        </div>
      </div>
    </div>
  </section>
  
  
    )
  }
  
  export default Comment