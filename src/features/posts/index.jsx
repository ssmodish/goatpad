import React from 'react'
import styled from 'styled-components'

import PostList from './components/PostList'

const PostsContainer = styled.div`
  grid-column: span 1;
  width: 100%;

  @media screen and (max-width: 1200px) {
    grid-column: span 2;
    padding: 0 0 0 30px;
  }

  @media screen and (max-width: 1000px) {
    grid-column: span 3;
    padding: 0 30px;
  }
`

const Posts = () => {
  return (
    <PostsContainer>
      <h1>Posts</h1>
      <PostList />
    </PostsContainer>
  )
}

export default Posts
