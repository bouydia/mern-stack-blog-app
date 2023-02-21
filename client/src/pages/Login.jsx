import{Link} from 'react-router-dom'
import { useState } from 'react'
import {toast} from 'react-toastify'
import { loginUser } from '../services/auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmitForm =async e => {
    e.preventDefault()
    if (email.trim() === '') return toast.error('email is empty')
    if (password.trim() === '') return toast.error('password is empty')
    const res = await fetch('https://blog-api-lpv7.onrender.com/api/auth/login', {
              method: 'POST',
              body: JSON.stringify({email,password}),
              headers: {
                'Content-Type': 'application/json',
              },
            })
    const data = await res.json()
                  console.log(data)
    //loginUser({email,password})
  }
  return (
    <section className="bg-white hieght">
      <div
        aria-label="Main"
        className=" flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
      >
        <div className="w-full md:w-1/2 p-2 ">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <form
            onSubmit={handleSubmitForm}
            className="mt-8 flex flex-col gap-4 items-center"
          >
            <div className="w-full lg:w-1/2">
              <label
                htmlFor="email"
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

            <div className="w-full lg:w-1/2">
              <label
                htmlFor="password"
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
            <div className="flex flex-col w-full lg:w-1/2">
              <button className="inline-block w-full rounded-md border border-primary bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-primary-focus focus:outline-none focus:ring active:text-primary">
                Login
              </button>

              <p className="mt-4 text-sm text-gray-500 ">
                forget your password?
                <Link to="/forget-password" className="text-gray-700 underline">
                  click here
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

export default Login
