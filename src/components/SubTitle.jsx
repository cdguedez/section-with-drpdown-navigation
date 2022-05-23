import React from 'react'
import styled from 'styled-components'

const SubTitle = ({ children }) => {
  return (
    <Container>{children}</Container>
  )
}

export default SubTitle

const Container = styled.p`
  color: #999FA0;
  height: 20vh;
  padding-right: 60px;
  display: flex;
  flex-direction: row;
  align-items: center
`