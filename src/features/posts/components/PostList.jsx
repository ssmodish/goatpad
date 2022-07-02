import React from 'react'
import { useSelector } from 'react-redux'
import { postsSelectors } from '../postsSlice'

import Post from './Post'

const PostList = () => {
  // const dispatch = useDispatch()
  const allPosts = useSelector(postsSelectors.selectEntities)

  const postsList = []

  for (const id in allPosts) {
    if (Object.hasOwnProperty.call(allPosts, id)) {
      const postItem = allPosts[id]

      postsList.push(
        <Post
          key={postItem.id}
          id={postItem.id}
          title={postItem.title}
          topics={postItem.topics}
          postBody={postItem.postBody}
        />
      )
    }
  }
  return (
    <div>
      <h3>Posts</h3>
      {postsList}
    </div>
  )
}

export default PostList
