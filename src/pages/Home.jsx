import React, { useEffect } from 'react'
import styled from 'styled-components'
import Logo from './../components/Logo'
import Title from './../components/Title'
import HeroDesktop from './../assets/images/image-hero-desktop.png'
import Button from '../components/Button'
import SubTitle from '../components/SubTitle'
import clientMaker from './../assets/images/client-maker.svg'
import Databiz from './../assets/images/client-databiz.svg'
import Meet from './../assets/images/client-meet.svg'
import AudioPhile from './../assets/images/client-audiophile.svg'
import CustomersArea from './../components/CustomersArea'
const items = [ Databiz, AudioPhile, Meet, clientMaker ]

const Home = () => {

  useEffect(() => {
    document.title = 'Home | App Frontend Mentor'
  }, [])

  return (
    <Main>
      <SectionDescription>
        <Title size='3rem' text='Make'/>
        <Title size='3rem' text=' Remote work' />
        <SubTitle>
          Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
        </SubTitle>
        <Button text='Learn More'/>
        <CustomersArea items={items} />
      </SectionDescription>
      <SectionImg>
        <Logo width='100%' image={HeroDesktop} />
      </SectionImg>
    </Main>
  )
}

export default Home

const Main = styled.main`
  margin: 0 auto;
  width: 70%;
  height: 90vh;
  padding: 12px 0;
  display: flex;
`

const SectionDescription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center
`

const SectionImg = styled.section`
  height: inherit;
  img {
    height: inherit
  }
`