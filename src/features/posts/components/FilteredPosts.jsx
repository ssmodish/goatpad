import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useCollection } from '../../../hooks/useCollection'

import { Stack } from '../../../components/styles/Stack.styled'

import Post from './Post'

const FilteredPosts = () => {
  const { topic } = useParams()
  const { documents } = useCollection(
    'posts',
    ['topics', 'array-contains', topic],
    ['timestamp', 'desc']
  )

  useEffect(() => {
    console.log(topic)
  }, [topic])

  return (
    <Stack gutter="lg">
      <h2>FilteredPosts</h2>
      {documents &&
        documents.map((post) => <Post postData={post} key={post.id} />)}
    </Stack>
  )
}

export default FilteredPosts
