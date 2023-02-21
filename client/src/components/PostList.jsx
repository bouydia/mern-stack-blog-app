import React from 'react'
import Post from './Post'

const PostList = ({posts}) => {
    
  return (
    <div className='w-full flex flex-col items-center gap-4 p-4 bg-green-500'>
      {posts?.map(post => (
        <Post
          id={post._id}
          title={post.title}
          description={post.description}
          category={post.category}
          image={post.image}
          likes={post.likes}
          createdAt={post.createdAt}
          user={post.user}
        />
      ))}
    </div>
  )
}

export default PostList


