import React from 'react'
import styled from 'styled-components'
import Link from './Link'

const MenuLogin = () => {
  return (
    <Nav>
      <Link to="#">Login</Link>
      <Link to="#">Register</Link>
    </Nav>
  )
}

export default MenuLogin

const Nav = styled.nav`
  a {
    margin: 2px
  }
  a:nth-child(2) {
    padding: 8px 12px;
    border: 2px solid #999FA0;
    border-radius: 8px;
    margin-left: 12px;
  }
  a:nth-child(2):hover {
    border: 2px solid #000;
  }
`