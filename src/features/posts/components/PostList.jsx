import React from 'react'
import { useSelector } from 'react-redux'
// import { selectPostsArray, selectPostsStatus } from '../postsSlice'

import Post from './Post'

const PostList = () => {
  const postsArray = useSelector((state) => state.posts.posts)
  const postsStatus = useSelector((state) => state.posts.status)

  console.log(postsArray)
  console.log(postsStatus)

  if (postsStatus.status === 'pending' || postsStatus.status === 'idle') {
    return <h1>LOADING...</h1>
  }

  if (postsStatus.status === 'rejected') {
    return <h1>SOMETHING WENT WRONG!</h1>
  }

  return (
    <>
      <h1>PostList</h1>
      {postsArray?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}

export default PostList
