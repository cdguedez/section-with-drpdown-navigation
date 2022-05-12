import React from 'react'
import styled from 'styled-components'

const Button = ({ text, color }) => {
  return (
    <Btn>{text}</Btn>
  )
}

export default Button

const Btn = styled.button`
  background-color: #000;
  color: #fff;
  padding: 8px 12px;
  border-radius: 8px;
`