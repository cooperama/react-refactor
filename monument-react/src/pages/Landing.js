import React from 'react';
import Header from '../components/LandingHeader';
import Archive from '../components/Archive';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

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