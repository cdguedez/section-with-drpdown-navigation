import React from 'react'
import styled from 'styled-components'

const Button = ({ text, width = '120px' }) => {
  return (
    <Btn style={{width}}>{text}</Btn>
  )
}

export default Button

const Btn = styled.button`
  background-color: #000;
  color: #fff;
  padding: 8px 12px;
  border-radius: 8px;
  :hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }
`