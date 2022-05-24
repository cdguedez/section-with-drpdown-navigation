import React from 'react'
import Header from './components/Header';
import Home from './pages/Home'
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <Header/>
      <Home />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #F1F1F1;
`