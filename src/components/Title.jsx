import React from 'react'
import styled from 'styled-components'

const Title = ({ text, size }) => {
  return (
    <TxtTitle style={{ fontSize: size ? size : '24px' }}>{ text }</TxtTitle>
  )
}

export default Title

const TxtTitle = styled.h1`
  margin: 0;
  font-weight: 600;
`

