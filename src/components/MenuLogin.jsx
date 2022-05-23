import React from 'react'
import styled from 'styled-components'

const MenuLogin = () => {
  return (
    <Nav>
      <a href="/">Login</a>
      <a href="/">Register</a>
    </Nav>
  )
}

export default MenuLogin

const Nav = styled.nav`
  a {
    text-decoration: none;
    color: #999FA0;
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