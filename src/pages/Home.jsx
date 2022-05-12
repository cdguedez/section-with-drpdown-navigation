import React, { useEffect } from 'react'
import styled from 'styled-components'
import Logo from './../components/Logo'
import Title from './../components/Title'
import HeroDesktop from './../assets/images/image-hero-desktop.png'
import Button from '../components/Button'

const Home = () => {

  useEffect(() => {
    document.title = 'App Frontend Mentor'
  }, [])

  return (
    <Main>
      <section>
        <Title size='80' text='Make'/>
        <Title size='80' text=' Remote work' />
        <p>
        Get your team in sync, no matter your location. Streamline processes, 
  create team rituals, and watch productivity soar.
        </p>
        <Button text='Learn More'/>
        <div>
          images
        </div>
      </section>
      <section><Logo width='100%' image={HeroDesktop}/></section>
    </Main>
  )
}

export default Home

const Main = styled.main`
  margin: 0 auto;
  width: 75%;
  height: 90vh;
  padding: 12px 0;
  display: flex;
  section:nth-child(1) {
    width: 50%;
  }
  section:nth-child(2) {
    width: 50%;
  }
`