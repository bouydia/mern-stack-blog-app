import { useParams, Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { posts } from '../dummyData'
import { BsTrashFill, BsPencilSquare, BsImageFill } from 'react-icons/bs'
import { AiFillLike } from 'react-icons/ai'
import { useState } from 'react'
import AddComment from '../components/AddComment'
import CommentList from '../components/CommentList'
import swal from 'sweetalert'
import UpdatePostModal from '../components/UpdatePostModal'

const PostDetails = () => {
  const { id } = useParams()
  const [file, setFile] = useState(null)
  const post = posts.find(p => p._id == id)
  const handleDeletePost = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        swal('post has been deleted successfullys', {
          icon: 'success',
        })
        console.log('deleted ..................')
      } 
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (!file) return toast.warning('There is no file')
    const newData = new FormData()
    newData.append('image', file)
  }
  return (
    <div className="wrapper m-auto my-4 p-6">
      <div className="flex flex-col w-full ">
        <img
          src={file ? URL.createObjectURL(file) : post.image}
          alt="img"
          className="max-w-[600px] mx-auto object-cover h-[400px]"
        />
        <form onSubmit={handleSubmit} className="my-2 flex gap-3">
          <label htmlFor="file">
            <BsImageFill className="fill-blue-500 inline" size={30} /> Select
            new image
          </label>
          <input
            type="file"
            name="file"
            id="file"
            className="hidden"
            onChange={e => setFile(e.target.files[0])}
          />
          <button type="submit" className="border p-2">
            Upload
          </button>
        </form>
      </div>
      <div className="px-4">
        <h1 className="my-3 font-extrabold text-4xl">{post.title}</h1>
        <div className="my-2 flex justify-between">
          <div className="flex items-center gap-1">
            <img className="w-8 rounded-full" src={post.user.image} alt="" />
            <strong className="text-sm">
              <Link to="/profile/1">{post.user.username}</Link>
            </strong>
          </div>
          <span>{post.createdAt}</span>
        </div>
        <p className="text-base first-letter:capitalize">
          {post.description} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Vel fuga adipisci necessitatibus rerum earum! Error, labore rem
          dignissimos deleniti quod odit officia maxime, perferendis, debitis
          iste voluptatibus iure aut ut! lorelLorem ipsum dolor sit amet
          consectetur adipisicing elit. Vel fuga adipisci necessitatibus rerum
          earum! Error, labore rem dignissimos deleniti quod odit officia
          maxime, perferendis, debitis iste voluptatibus iure aut ut! lorelLorem
          ipsum dolor sit amet consectetur adipisicing elit. Vel fuga adipisci
          necessitatibus rerum earum! Error, labore rem dignissimos deleniti
          quod odit officia maxime, perferendis, debitis iste voluptatibus iure
          aut ut! lorel
        </p>
        <div className="flex justify-between p-2 my-3">
          <div className="flex items-center">
            <AiFillLike size={20} />
            <small>{post.likes.length} likes</small>
          </div>
          <div className="flex gap-2">
            <BsTrashFill
              size={20}
              className="fill-red-600"
              onClick={handleDeletePost}
            />

            <a href="#my-modal-2" className="">
              <BsPencilSquare size={20} className="fill-green-700" />
            </a>
            {/* POST MODAL */}
            <UpdatePostModal post={post} />
          </div>
        </div>
        <div className="mb-4">
          <div className="my-3">
            <AddComment />
          </div>
          <div>
            <CommentList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails
