import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  grid-column: span 3;
  display: flex;
  justify-content: center;
  padding: 30px;
  border-top: 1px solid #ddd;
`

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <StyledFooter>
      <div>A Grammerhub Creation - {footerYear}</div>
    </StyledFooter>
  )
}

export default Footer
