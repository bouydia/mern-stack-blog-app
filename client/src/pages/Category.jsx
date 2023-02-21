import { useParams } from 'react-router-dom'
import { posts } from '../dummyData.js'
import PostList from '../components/PostList'
import { useEffect } from 'react'

const Category = () => {
  const { category } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="p-6 wrapper">
      <h1 className="my-6 text-3xl font-bold text-center">
        Post based on {category}
      </h1>
      <PostList posts={posts} />
    </div>
  )
}

export default Category
