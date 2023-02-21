import { useState } from 'react'
import { BsImageFill } from 'react-icons/bs'
import PostList from '../components/PostList'
import { posts } from '../dummyData'
import swal from 'sweetalert'
import UpdateProfileModal from '../components/UpdateProfileModal'
const Profile = () => {
  const [file, setFile] = useState(null)
  const handleUploadImage = () => {}
    const handleDeleteAccount = () => {
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

  return (
    <div className="wrapper">
      <div className="w-1/2 mx-auto">
        <img
          src={file ? URL.createObjectURL(file) : '/images/user-avatar.png'}
          alt=""
          className=" object-cover mx-auto mb-2 rounded-full w-[150px] h-[150px]"
        />
        <form
          onSubmit={handleUploadImage}
          className="w-full flex justify-center gap-4 items-center"
        >
          <abbr title="Choose image">
            <label htmlFor="file">
              <BsImageFill size={25} />
            </label>
            <input
              className="hidden"
              onChange={e => setFile(e.target.files[0])}
              type="file"
              name="file"
              id="file"
            />
          </abbr>
          <button type="submit" className="btn btn-bordered">
            upload
          </button>
        </form>
      </div>
      <div className="p-12 mt-2">
        <h1 className="text-center text-4xl font-bold capitalize p-4">
          Youness bouydia
        </h1>
        <p className="text-justify indent-4	">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor earum
          perferendis debitis eum id minus, libero magnam quae aperiam
          cupiditate laboriosam minima nam dolores labore animi? Veritatis
          dignissimos ipsam autem.
        </p>
        <div className="flex gap-1">
          <strong>Date Joined :</strong>
          <span>Fri Fib 06 2023</span>
        </div>
        <a href="#my-modal-9" className="">
          <button className="btn btn-bordered">Update Profile</button>
        </a>
        {/* POST MODAL */}
        <UpdateProfileModal />
      </div>
      <div>
        <h2>Youness posts</h2>
        <PostList posts={posts} />
      </div>
      <div className="text-center">
        <button
          onClick={handleDeleteAccount}
          className=" btn btn-bordred btn-error"
        >
          Delete your account
        </button>
      </div>
    </div>
  )
}

export default Profile
