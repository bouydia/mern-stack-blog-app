import { useState } from 'react'
import { toast } from 'react-toastify'

const AddCategoryForm = () => {
  const [category, setCategory] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (category.trim() === '')
        return toast.error('Please enter a ctegory name', {
          autoClose: 100,
          toastId: '0x00023',
        })
    console.log(category)
  }
  return (
      <form className='w-full md:w-1/2  border rounded-xl py-6 px-12 mx-auto' onSubmit={handleSubmit}>
          <h3 className='text-xl md:text-3xl p-2 font-bold text-center'>Add Category</h3>
      <label htmlFor="category">Catgory name</label>
      <input
        id="category"
        type="text"
        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
        placeholder="Enter category name"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <button type="submit" className="mt-4 btn btn-primary btn-bordred w-full">
        Add category
      </button>
    </form>
  )
}

export default AddCategoryForm
