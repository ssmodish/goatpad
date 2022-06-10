import styled from 'styled-components'

export const PostCard = styled.div`
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  box-shadow: 1px 1px 5px rgba(50, 50, 50, 0.1);

  h3 {
    font-size: 1.4rem;
  }

  p {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1000px) {
    grid-column: span 1;
  }
`
