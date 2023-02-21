import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const handleSubmitForm = e => {
    e.preventDefault()
    if (password.trim() === '') return toast.error('password is empty')
    console.log(password)
  }
  return (
    <section className="hieght flex items-center justify-center">
      <div
        aria-label="Main"
        className="w-full md:w-1/2 flex items-center justify-center px-8 py-8 sm:px-12 lg:py-12 lg:px-16 "
      >
        <div className="w-full">
          <h1 className="text-xl sm:text-3xl font-bold text-center p-4">
            Reset your password
          </h1>
          <form
            onSubmit={handleSubmitForm}
            className="mt-8 flex flex-col gap-4"
          >
            <div className="w-full">
              <label
                for="email"
                className="block text-sm font-medium text-gray-700"
              >
                Enter new password
              </label>

              <input
                type="text"
                id="email"
                name="email"
                className="my-1 input input-bordered w-full  focus:border-primary-focus focus:ring-primary"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
              <button className="mx-auto w-96 rounded-md border border-primary bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-primary-focus focus:outline-none focus:ring active:text-primary">
                Submit
              </button>
          </form>
        </div>
      </div>
    </section>
    
  )
}

export default ResetPassword
