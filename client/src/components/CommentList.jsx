import { BsTrashFill, BsPencilSquare, BsImageFill } from 'react-icons/bs'
import swal from 'sweetalert'
import UpdateCommentModal from './UpdateCommentModal'
const CommentList = () => {
    const handleDeleteComment = () => {
        swal({
          title: 'Are you sure?',
          text: 'Once deleted, you will not be able to recover this imaginary file!',
          icon: 'warning',
          buttons: true,
          dangerMode: true,
        }).then(willDelete => {
          if (willDelete) {
            swal('Poof! Your imaginary file has been deleted!', {
              icon: 'success',
            })
              console.log('deleted ..................');
          } else {
            swal('Your imaginary file is safe!')
          }
        })
    }
  return (
    <div className="mt-3">
      <h4 className="text-3xl">2 Comment</h4>
      {[1, 2].map((comment, i) => (
        <article
          key={i}
          className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900"
        >
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough"
                />
                Michael Gough
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time title="February 8th, 2022">2 hour ago</time>
              </p>
            </div>
            <div className="flex gap-2">
              <BsTrashFill
                size={20}
                className="fill-red-600"
                onClick={handleDeleteComment}
              />
              <a href="#my-modal-3" className="">
              <BsPencilSquare size={20} className="fill-green-700" />
              </a>
              <UpdateCommentModal />
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            Very straight-to-point article. Really worth time reading. Thank
            you! But tools are just the instruments for the UX designers. The
            knowledge of the design tools are as important as the creation of
            the design strategy.
          </p>
        </article>
      ))}
    </div>
  )
}

export default CommentList
