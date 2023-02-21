import { useState } from 'react'
import { toast } from 'react-toastify'

const user = {
    username: 'zeon',
    bio:'hacker'
}
const UpdateProfileModal = () => {
  const [username, setUsername] = useState(user.username)
  const [bio, setBio] = useState(user.bio)
  const [password, setPassword] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault()
    if (username.trim() == '') return toast.error('Post username is required')
    const updatedUser = { username, bio }
    if (password) {
      updatedUser.password=password
    }
    console.log(updatedUser)
  }
  return (
    <div>
      <div className="modal" id="my-modal-9">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center mb-6">Update Profile</h3>
          <form onSubmit={handleSubmit} className="w-80 flex flex-col gap-4">
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
              type="text"
              placeholder="username"
              className="focus:ring-0 focus:border-none border-2 input-bordered border-green-500 focus:outline-green-400 input w-full max-w-xs"
            />
            <input
              type="text"
              className="focus:ring-0 focus:border-none border-2 input-bordered border-green-500 focus:outline-green-400 input w-full max-w-xs"
              value={bio}
              placeholder='bio'
              onChange={e => setBio(e.target.value)}
            />

            <input
              placeholder='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
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

export default UpdateProfileModal
