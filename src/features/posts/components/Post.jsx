import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost, updatePost } from '../postsSlice'

const Post = ({ title, id, topics, postBody }) => {
  const dispatch = useDispatch()

  const deleteItem = () => {
    dispatch(deletePost(id))
  }

  const updateItem = () => {
    dispatch(
      updatePost({
        id: id,
        changes: {
          title: 'Updated Title',
          topics: [...topics, 'UPDATED POSTS'],
          postBody: 'THIS POST WAS DEFINITELY UPDATED',
        },
      })
    )
  }

  return (
    <div className="post" key={id}>
      <h3>{title}</h3>
      <p>{topics.join(', ')}</p>
      <p>{postBody}</p>
      <button onClick={updateItem}>Update</button>
      <button onClick={deleteItem}>Delete</button>
    </div>
  )
}

export default Post
