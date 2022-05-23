import React from 'react'

const Link = ({ to, icon = null, children, onClick }) => {
  return (
    <a
      onClick={onClick}
      href={to}
    >{ children } <img src={icon} alt="" /></a>
  )
}

export default Link