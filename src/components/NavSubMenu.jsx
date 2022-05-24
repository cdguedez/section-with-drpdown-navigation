import React from 'react'
import Link from './Link'
import styled from 'styled-components'

const NavSubMenu = ({ items, isVisible }) => {

  return (
    <Container isVisible={isVisible}>
      { items.map(({ name, path, img }) => (
          <li key={path}>
            <Link isSubmenu icon={img} to={ path }>{ name }</Link>
          </li>
      )) }
    </Container>
  )
}

const Container = styled.ul`
  display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
  position: absolute;
  top: 70px;
  list-style: none;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 4px;
  box-shadow: 4px 4px 8px #E1E1E1;
  li {
    padding: 4px 0;
  }
`

export default NavSubMenu