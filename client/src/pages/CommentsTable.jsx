import { Link } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa'
import { BsFilePost } from 'react-icons/bs'
import { BiComment } from 'react-icons/bi'
import { AiOutlineUnorderedList } from 'react-icons/ai'
const CommentsTable = () => {
  const handleDeleteComment = () => {
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
          <h2 className="font-bold text-xl md:text-4xl mb-4">Comments List</h2>
          <div className="overflow overflow-y-scroll">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Count</th>
                  <th>User</th>
                  <th>Comment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((row,i) => (
                  <tr>
                        <td>{i + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src="/images/user-avatar.png" alt="Avatar" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                        </div>
                      </div>
                    </td>
                    <td>this post is wondrful</td>
                    <th>
                      <button
                        className="btn btn-error"
                        onClick={handleDeleteComment}
                      >
                        Delete
                      </button>
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

export default CommentsTable
