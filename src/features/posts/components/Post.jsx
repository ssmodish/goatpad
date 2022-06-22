import React from 'react'

import { Stack } from '../../../components/styles/Stack.styled'
import { Tag } from './styles/Tag.styled'
import { TopicBar } from './styles/TopicBar.styled'
import { PostCard } from './styles/PostCard.styled'

const Post = ({ postData }) => {
  const { title, topics, post, postBody, timestamp } = postData

  const postedAt = timestamp?.toDate().toString() || null

  return (
    <Stack gutter="xs">
      <PostCard>
        <h3>{title}</h3>
        <p>{post || postBody}</p>
        {postedAt && <p>Posted at: {postedAt}</p>}
        {topics ? (
          <TopicBar>
            {topics.map((topic) => (
              <Tag key={topic}>{topic}</Tag>
            ))}
          </TopicBar>
        ) : null}
      </PostCard>
    </Stack>
  )
}

export default Post
