import React from 'react'

import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr;
  column-gap: 30px;
`

const Layout = ({ children }) => {
  return <GridContainer>{children}</GridContainer>
}

export default Layout
