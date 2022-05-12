import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import MenuPpal from './MenuPpal'
import MenuLogin from './MenuLogin'
import Image from './../assets/images/logo.svg'

const Header = () => {
  return (
    <Container>
      <Logo image={Image}/>
      <MenuPpal />
      <MenuLogin />
    </Container>
  )
}

export default Header

const Container = styled.header`
  height: 70px;
  width: 100%;
  // box-shadow: 4px 4px 4px #c9c9c9;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center
`