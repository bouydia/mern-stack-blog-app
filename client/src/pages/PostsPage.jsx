import { useEffect } from 'react'
import PostList from '../components/PostList'
import SideBar from '../components/SideBar'
import { posts, categories } from '../dummyData'

const PostsPage = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div className="wrapper">
      <div className="flex p-4">
        <PostList posts={posts} />
        <SideBar categories={categories} />
      </div>
      <div className="flex justify-center mb-6">
        <div className="btn-group">
          <button className="btn">«</button>
          {[1, 2, 3, 4, 5].map(page => (
            <button className="btn">{page}</button>
          ))}
          <button className="btn">»</button>
        </div>
      </div>
    </div>
  )
}

export default PostsPage