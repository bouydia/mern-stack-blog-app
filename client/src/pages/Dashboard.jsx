import { Link } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa'
import { BsFilePost } from 'react-icons/bs'
import { BiComment } from 'react-icons/bi'
import { AiOutlineUnorderedList } from 'react-icons/ai'

import DashboardHeader from '../components/DashboardHeader'
import AddCategoryForm from '../components/AddCategoryForm'
const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  bg-white">
          {/*     <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
           */}
          <div className="mt-4 w-full flex justify-center">
            <DashboardHeader />
          </div>
          <div className="w-full h-[2px] rounded-full bg-neutral my-4" />
          <div className="mt-4">
            <AddCategoryForm />
          </div>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content border-r-2">
            <li>
              <a>
                <FaUsers size={25} />
                users
              </a>
            </li>
            <li>
              <a>
                <BsFilePost size={25} />
                posts
              </a>
            </li>
            <li>
              <a>
                <AiOutlineUnorderedList size={25} />
                categories
              </a>
            </li>
            <li>
              <a>
                <BiComment size={25} />
                comments
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
