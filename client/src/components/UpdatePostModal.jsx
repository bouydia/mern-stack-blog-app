import { useState } from 'react'
import {toast} from 'react-toastify'
const UpdatePostModal = ({ post }) => {
  const [title, setTitle] = useState(post.title)
  const [category, setCategory] = useState(post.category)

  const [description, setdescription] = useState(post.description)
    const handleSubmit = e => {
        e.preventDefault()
        if (title.trim() == '') return toast.error('Post title is required')
        if (description.trim() == '')
          return toast.error('Post description is required')

        if (category.trim() == '')
          return toast.error('Post category is required')
        console.log(title, category,description)
  }
  return (
    <div>
      <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center mb-6">Update Post</h3>
          <form onSubmit={handleSubmit} className="w-80 flex flex-col gap-4">
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text"
              placeholder="title"
              className="focus:ring-0 focus:border-none border-2 input-bordered border-green-500 focus:outline-green-400 input w-full max-w-xs"
            />
            <select
              className="select select-bordered"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option disabled value=''>
                Select Category
              </option>
              <option>Cars</option>
              <option>Gaming</option>
              <option>programming</option>
            </select>
            <textarea
              value={description}
              onChange={e => setdescription(e.target.value)}
              className="textarea textarea-bordered"
              rows="5"
            ></textarea>
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

export default UpdatePostModal
