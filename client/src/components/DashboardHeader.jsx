import {Link} from 'react-router-dom'

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 ">
      <div className="md:mb-2 flex w-full md:max-w-max flex-row md:flex-col items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
        <div className="flex items-center gap-4">
          <span className="hidden rounded-full bg-gray-100 p-2 text-gray-600 sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>

          <div>
            <p className="text-sm text-gray-500">Users</p>

            <p className="text-2xl font-medium text-gray-900">1600</p>
          </div>
        </div>
        <div className="mt-2 md:w-full justify-center inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
          <Link to="/" className="text-xs font-medium ">
            See all users
          </Link>
        </div>
      </div>

      <div className="md:mb-2 md:max-w-max flex w-full flex-row md:flex-col items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
        <div className="flex items-center gap-4">
          <span className="hidden rounded-full bg-gray-100 p-2 text-gray-600 sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>

          <div>
            <p className="text-sm text-gray-500">Posts</p>

            <p className="text-2xl font-medium text-gray-900">240</p>
          </div>
        </div>
        <div className="mt-2 md:w-full justify-center inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">
          <Link to="/" class="text-xs font-medium ">
            See all posts
          </Link>
        </div>
      </div>

      <div class="md:mb-2 md:max-w-max flex w-full flex-row md:flex-col items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
        <div class="flex items-center gap-4">
          <span class="hidden rounded-full bg-gray-100 p-2 text-gray-600 sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>

          <div>
            <p class="text-sm text-gray-500">Categories</p>

            <p class="text-2xl font-medium text-gray-900">240</p>
          </div>
        </div>

        <div class="mt-2 md:w-full justify-center inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">
          <Link to="/" class="text-xs font-medium ">
            See all categories
          </Link>
        </div>
      </div>

      <div class="md:mb-2 md:max-w-max flex w-full flex-row md:flex-col items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
        <div class="flex items-center gap-4">
          <span class="hidden rounded-full bg-gray-100 p-2 text-gray-600 sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>

          <div>
            <p class="text-sm text-gray-500">Comments</p>

            <p class="text-2xl font-medium text-gray-900">240</p>
          </div>
        </div>

        <div class="mt-2 md:w-full justify-center inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">
          <Link to="/" class="text-xs font-medium ">
            See all comments
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader