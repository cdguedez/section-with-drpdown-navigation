import React from 'react'
import styled from 'styled-components'
import MenuPpal from './MenuPpal'
import MenuLogin from './MenuLogin'
import Logo from './Logo'
import ImageLogo from './../assets/images/logo.svg'
const Header = () => {
  return (
    <Container>
      <MenuLeft>
        <Logo image={ImageLogo}/>
        <nav>
          <MenuPpal />
        </nav>
      </MenuLeft>
      <MenuLogin />
    </Container>
  )
}

export default Header

const Container = styled.header`
  font-weight: 600;
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  a:hover {
    color: #000;
  }
`

const MenuLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`