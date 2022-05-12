import React from 'react'

const Logo = ({ image, width }) => {
  return (
    <picture>
      <img width={width ? width : ''} src={image} alt="Logo menu" />
    </picture>
  )
}

export default Logo