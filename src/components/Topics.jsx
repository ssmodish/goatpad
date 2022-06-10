import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useCollection } from '../hooks/useCollection'

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
  const { documents } = useCollection('topics', null, ['timestamp', 'desc'])
  const topics = documents?.map((topic) => topic.topic)

  const navigate = useNavigate()

  return (
    <TopicsContainer>
      {topics &&
        topics.map((topic) => (
          <p key={topic} onClick={() => navigate(`topic/${topic}`)}>
            {topic}
          </p>
        ))}
    </TopicsContainer>
  )
}

export default Topics
