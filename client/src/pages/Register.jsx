import {useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmitForm = (e) => {
    e.preventDefault()
    if(username.trim()==='') return toast.error('username is empty')
    if(email.trim()==='') return toast.error('email is empty')
    if (password.trim() === '') return toast.error('password is empty')
    console.log(username,email,password);
  }
  return (
    <section className="bg-white hieght">
      <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
        <div className="w-full md:w-1/2 p-2">
          <h1 className="text-3xl font-bold text-center">Create new account</h1>
          <form
            onSubmit={handleSubmitForm}
            className="mt-8 flex flex-col gap-4 items-center"
          >
            <div className="w-full md:w-1/2">
              <label
                for="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>

              <input
                type="text"
                id="username"
                name="username"
                className="input input-bordered w-full  focus:border-primary-focus focus:ring-primary"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>

            <div className="w-full md:w-1/2">
              <label
                for="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                className="input input-bordered w-full  focus:border-primary-focus focus:ring-primary"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="w-full md:w-1/2">
              <label
                for="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                className="input input-bordered w-full  focus:border-primary-focus focus:ring-primary"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            {/* 
            <div className="w-fullsm:col-span-3">
              <label
                for="PasswordConfirmation"
                className="block text-sm font-medium text-gray-700"
              >
                Password Confirmation
              </label>

              <input
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
             */}
            <div className="w-full flex flex-col items-center gap-4">
              <button className="inline-block shrink-0 rounded-md border border-primary bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-primary-focus focus:outline-none focus:ring active:text-primary">
                Create an account
              </button>

              <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <Link to="/login" className="text-gray-700 underline">
                  Log in
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register