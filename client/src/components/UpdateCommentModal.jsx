import { useState } from 'react'
import { toast } from 'react-toastify'
const UpdateCommentModal = () => {
  const [text, setText] = useState('this is comment')

  const handleSubmit = e => {
    e.preventDefault()
      if (text.trim() == '') return toast.error('comment text is required')
      console.log(text, category, description)
  }
  return (
    <div>
      <div className="modal" id="my-modal-3">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center mb-6">Update comment</h3>
          <form onSubmit={handleSubmit} className="w-80 flex flex-col gap-4">
            <input
              value={text}
              onChange={e => setText(e.target.value)}
              type="text"
              placeholder="text"
              className="focus:ring-0 focus:border-none border-2 input-bordered border-green-500 focus:outline-green-400 input w-full max-w-xs"
            />
            
            <button type="submit" className="btn">
              Update
            </button>
          </form>
          <div className="modal-action">
            <a href="#" className="btn">
              close
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateCommentModal
