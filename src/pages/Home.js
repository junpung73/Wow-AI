import { Container } from '@mui/system';
import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import AboutUs from '../components/home/AboutUs';
import Achieverments from '../components/home/Achieverments';
import Management from '../components/home/Management';
import Services from '../components/home/Services';
import SlideHome from '../components/home/SlideHome';
import Solution from '../components/home/Solution';
import WhyChoose from '../components/home/WhyChoose';

const Home = () => {
  return (
    <div>
      <SlideHome />
      <Container style={{ maxWidth: '1330px' }}>
        <div className='arrowdown'>
          <img src='/images/scrollarrow.png' alt='scroll' />
        </div>
        <AboutUs />
        <div className='arrowdown'>
          <img src='/images/scrollarrow.png' alt='scroll' />
        </div>
        <Services />
        <Achieverments />
        <WhyChoose />
        <Solution />
        <Management />
      </Container>
    </div>
  )
}

export default Home

