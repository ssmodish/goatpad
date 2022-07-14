import React from 'react'

const Post = ({ post }) => {
  const { title, topics, postBody } = post
  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{topics.join(', ')}</p>
      <p>{postBody}</p>
      <button>Update</button>
      <button>Delete</button>
    </div>
  )
}

export default Post
