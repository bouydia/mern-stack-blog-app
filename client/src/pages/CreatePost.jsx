import  {toast , ToastContainer} from 'react-toastify'
import { useState } from 'react'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [file, setFile] = useState(null)

  const submitHandler = e => {
    e.preventDefault()
    if (title.trim() == '') return toast.error('Post title is required')
    if (description.trim() == '')
      return toast.error('Post description is required')

    if (category.trim() == '') return toast.error('Post category is required')

    if (!file) return toast.error('Post title is required')

      const formData = new FormData()
      formData.append('iamge', file)
      formData.append('title', title)
      formData.append('description', description)
      formData.append('category', category)
      
      // TODO send form data to the server
  }

  return (
    <div className="wrapper">
      <h1 className="text-4xl text-center p-4 mb-6 font-extrabold">
        Create Post
      </h1>
      <form
        onSubmit={submitHandler}
        className="w-96 mx-auto flex flex-col flex-start gap-5"
      >
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option disabled value="">
            {' '}
            select a catgory
          </option>
          <option value="cars"> cars</option>
          <option value="music"> music</option>
        </select>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="post desription"
          rows="5"
        ></textarea>
        <input
          type="file"
          name="file"
          onChange={e => setFile(e.target.files[0])}
        />
        <button
          type="submit"
          className="block bg-blue-400 rounded-xl p-2 text-white text-xl"
        >
          {' '}
          Create
        </button>
      </form>
    </div>
  )
}

export default CreatePost
