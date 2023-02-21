import { useState } from 'react'
import {toast} from 'react-toastify'
const AddComment = () => {
  const [comment, setComment] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        if (!comment) return toast.warning('please write somthing')
        
        setComment('')
        
  }
  return (
    <form onSubmit={handleSubmit} className="h-16 p-2 border max-w-md flex justify-between items-center">
      <input
        type="text"
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="add your comment"
        className="h-full w-full border-none focus:ring-0 border-b"
      />
      <button
        type="submit"
        className="py-1 px-2 text-white border  h-full bg-blue-600 hover:bg-blue-500"
      >
        Comment
      </button>
    </form>
  )
}

export default AddComment
