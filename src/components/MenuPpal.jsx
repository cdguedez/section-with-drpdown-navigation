import React from 'react'
import styled from 'styled-components'
import { BsChevronCompactDown } from 'react-icons/bs'

const MenuPpal = () => {
  return (
    <Nav>
      <a href="#">Features <BsChevronCompactDown onClick={() => console.log('click in icon')}/></a>
      <a href="/">Company <BsChevronCompactDown onClick={() => console.log('click in icon')}/></a>
      <a href="/">Careers</a>
      <a href="/">About</a>
    </Nav>
  )
}

export default MenuPpal

const Nav = styled.nav`
  a {
    text-decoration: none;
    color: #999FA0;
    margin: 0 8px
  }
`