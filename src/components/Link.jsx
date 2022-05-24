import React from 'react'
import styled from 'styled-components'

const Link = ({ to, icon = null, children, onClick, isSubmenu = false }) => {
  return (
    <A
      onClick={onClick}
      href={to}
    >
      {
        isSubmenu
          ? <span><img src={icon} alt="" /> { children }</span>
          : <span>{ children } <img src={icon} alt="" /></span>
      }
    </A>
  )
}

export default Link


const A = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #999FA0;
`