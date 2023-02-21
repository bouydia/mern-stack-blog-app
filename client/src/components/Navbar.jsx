import { useState } from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineMenu } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import logo from '../assets/logo.svg'

const NavLink = ({ name, isMobile, setOpen }) => (
  <Link
    to={`/${name}`}
    className={`${
      isMobile
        ? 'text-white- hover:text-primary'
        : ' text-gray-700 hover:text-gray-900'
    }relative rounded-lg px-4 py-2 capitalize  text-xl transition-colors delay-150  hover:delay-[0ms]`}
    onClick={() => setOpen(false)}
  >
    {name}
  </Link>
)



const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative w-full h-[80px] border-b border-gray-300 z-50">
      <div className="max-w-[1200px] px-5 m-auto h-full flex justify-between items-center">
        <img src={logo} className="h-[25px]" alt="logo" />
        <div className="hidden md:flex items-center">
          <ul className="flex gap-6">
            {['posts', 'create', 'about', 'admin dahsboard'].map((item, i) => (
              <NavLink key={i} name={item} setOpen={setOpen} />
            ))}
          </ul>
        </div>
        <div className="hidden md:flex border  items-center ">
          <Link to="/login" className="px-4 font-semibold">
            Login
          </Link>
          <Link to="/register">
            <p className="bg-primary p-2 text-white font-semibold hover:bg-primary-focus">
              Create Account
            </p>
          </Link>
        </div>
        <div className="flex md:hidden cursor-pointer">
          {open ? (
            <CgClose size={30} onClick={() => setOpen(false)} />
          ) : (
            <AiOutlineMenu size={30} onClick={() => setOpen(true)} />
          )}
        </div>
        {open && (
          <div className="text-white slide-right  fixed nav-hieght w-full top-[80px] right-0 left-0 bg-primary-content ">
            <div className="flex flex-col mx-8 mt-8 gap-6">
              <div className="flex flex-col items-start">
                <ul className="flex flex-col gap-9">
                  {['posts', 'create', 'about', 'admin dahsboard'].map(
                    (item, i) => (
                      <NavLink key={i} name={item} isMobile />
                    )
                  )}
                </ul>
              </div>
              <div className="flex flex-col">
                <Link
                  to="/login"
                  className="hover:text-gray-100 border border-b-0 p-2 sm:text-lg  text-center font-semibold"
                >
                  Login
                </Link>
                <Link to="/register">
                  <p className="bg-primary sm:text-lg p-2 text-center text-white font-semibold hover:bg-primary-focus">
                    Create Account
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
