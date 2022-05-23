import React from 'react'

const Logo = ({ image, width, description = null }) => {
  return (
    <picture>
      <img width={width ? width : ''} src={image} alt="Logo menu" />
      { description && <figcaption>{ description }</figcaption> }
    </picture>
  )
}

export default Logo