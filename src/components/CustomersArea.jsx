import React from 'react'
import styled from 'styled-components'
const CustomersArea = ({ items }) => {
  return (
    <Container>
      {
        items.map((item, index) =>
          (
            <picture key={index}>
              <Img height='18' src={item} alt="" />
            </picture>
          )
        )
      }
    </Container>
  )
}

export default CustomersArea

const Container = styled.section`
  padding: 2rem 0;
`

const Img = styled.img`
  padding: 8px;
`