import React from 'react';
import Header from '../components/landing/LandingHeader';
import Archive from '../components/landing/Archive';
import About from '../components/landing/About';
import Gallery from '../components/landing/Gallery';
import Contact from '../components/landing/Contact';

import './Landing.css';


const Landing = (props) => {
  return (
    <div>
      <Header />
      <Archive />
      <About />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Landing;