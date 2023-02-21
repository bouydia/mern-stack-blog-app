import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import PostList from '../components/PostList'
import SideBar from '../components/SideBar'
import { posts, categories } from '../dummyData.js'
const Home = () => {
  return (
    <div className="bg-red-200 wrapper">
      <div className="w-full ">
        <Hero />
      </div>
      <div className="p-8  bg-red-600">
        <h2 className="underline text-4xl md:text-6xl font-bold text-center p-4 mb-2 sm:mb-4">
          Latest Post
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex-9">
            <PostList posts={posts.slice(0, 3)} />
          </div>
          <div className="flex-3 sticky top-14 h-1/2 bg-info">
            <SideBar categories={categories} />
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-4 sm:mt-6  ">
        <Link
          to="/posts"
          className="w-[80%] btn btn-primary text-white text-3xl "
        >
          See all posts
        </Link>
      </div>
    </div>
  )
}

export default Home
