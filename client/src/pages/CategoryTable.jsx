import { Link } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa'
import { BsFilePost } from 'react-icons/bs'
import { BiComment } from 'react-icons/bi'
import { AiOutlineUnorderedList } from 'react-icons/ai'

import { categories } from '../dummyData'
const CategoryTable = () => {
  const handleDeleteUser = () => {
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
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  bg-white overflow-hidden h-screen p-2">
          {/*     <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
           */}
          <h2 className="font-bold text-xl md:text-4xl mb-4">
            Categories List
          </h2>
          <div className="overflow overflow-y-scroll">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Count</th>
                  <th>Category Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((row, i) => (
                  <tr>
                    <td>{i + 1}</td>

                    <td>{row.title}</td>
                    <th>
                      <div className="btn-group">
                        <Link to="/user/1" className="btn btn-info">
                          info
                        </Link>
                        <button
                          className="btn btn-error"
                          onClick={handleDeleteUser}
                        >
                          Delete
                        </button>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default CategoryTable
