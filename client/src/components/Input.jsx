import { AiFillExclamationCircle } from 'react-icons/ai'

const Input = ({ type, name, placeHolder, value }) => {
  const error = false
  const errorClass =
    'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500  focus:ring-red-500 '

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 capitalize "
      >
        {name}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type={name}
          name={name}
          id={name}
          value={value}
          className={`${error && errorClass} block w-full rounded-md  pr-10
           sm:text-sm focus:outline-none`}
          placeholder={placeHolder}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <AiFillExclamationCircle
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          Your password must be less than 4 characters.
        </p>
      )}
    </div>
  )
}

export default Input
