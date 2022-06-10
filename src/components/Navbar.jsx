import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const NavbarContainer = styled.div`
  grid-column: span 3;
  width: 100vw;
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-gap: 30px;
  justify-content: space-around;
  background-color: #fff;
`

const AppTitle = styled.h1`
  grid-column: 2;
  font-size: 2rem;
  padding: 10px;

  @media screen and (max-width: 1200px) {
    grid-column: 1 / span 2;
    padding: 10px 30px;
  }
`

const NavbarButtonContainer = styled.div`
  grid-column: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;

  @media screen and (max-width: 1200px) {
    grid-column: 3 / span 2;
    padding-right: 30px;
  }
`

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <NavbarContainer>
      <AppTitle>
        <Link to="/">Goatpad</Link>
      </AppTitle>
      <NavbarButtonContainer>
        <Link to="/about">
          <p>About</p>
        </Link>
        {!user ? (
          <>
            <Link to="/signup">
              <p>Signup</p>
            </Link>
            <Link to="/login">
              <p>Login</p>
            </Link>
          </>
        ) : (
          <>
            <Link to="/profile">
              <p>Profile</p>
            </Link>
            <Link to="/">
              <p onClick={logout}>Logout</p>
            </Link>
          </>
        )}
      </NavbarButtonContainer>
    </NavbarContainer>
  )
}

export default Navbar
