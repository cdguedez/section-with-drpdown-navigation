import React, { useState } from 'react'
import styled from 'styled-components'
import Link from './Link'
import NavSubMenu from './NavSubMenu'
import menuCompany from './../routes/company.routes'
import menuFeatures from './../routes/features.routes'
import Img from './../assets/images/icon-arrow-down.svg'

const MenuPpal = () => {
  const [isToggleFeature, setIsToggleFeature] = useState(false)
  const [isToggleCompany, setIsToggleCompany] = useState(false)

  const toggleSubMenu = (toggle, typeMenu) => {
    if (typeMenu === 'features')  setIsToggleFeature(!toggle)
    if (typeMenu === 'company')   setIsToggleCompany(!toggle)
  }

  return (
    <Container>
      <li onClick={() => toggleSubMenu(isToggleFeature, 'features')}>
        <Link to="#" icon={Img}>Features</Link>
        <NavSubMenu  isVisible={isToggleFeature} items={menuFeatures} />
      </li>
      <li onClick={() => toggleSubMenu(isToggleCompany, 'company')} >
        <Link to="#" icon={Img}>Company</Link>
        <NavSubMenu isVisible={isToggleCompany} items={menuCompany} />
      </li>
      <li>
        <Link to="#">Careers</Link>
      </li>
      <li><Link to="#">About</Link></li>
    </Container>
  )
}

export default MenuPpal

const Container = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  li {
    margin: 0 20px
  }
`
