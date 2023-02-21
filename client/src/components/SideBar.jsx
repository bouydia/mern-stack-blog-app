import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = ({categories}) => {
  return (
    <div className="text-info-content h-full p-8">
      <h3 className="text-center p-2 text-2xl sm:text-3xl font-bold">
        Categories
      </h3>
      <ul className="flex flex-col items-center text-center text-lg font-medium">
        {categories.map(category => (
          <Link
            to={`posts/categories/${category.title}`}
            className=" last:border-b-0 w-full p-2 border-b-2 border-accent"
            key={category._id}
          >
            {category.title}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default SideBar