import React from 'react'
import styled from 'styled-components'

const TopicsContainer = styled.div`
  grid-column: span 1;
  padding: 30px;
  border-right: 1px solid #ddd;

  @media screen and (max-width: 1200px) {
    grid-column: span 3;
    border-right: 0;
    border-bottom: 1px solid #ddd;
  }
`

const Topics = () => {
  return <TopicsContainer>Recent Topics</TopicsContainer>
}

export default Topics
