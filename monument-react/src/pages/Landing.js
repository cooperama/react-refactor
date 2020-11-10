import React from 'react';
import Header from '../components/LandingHeader';
import Archive from '../components/Archive';
import About from '../components/About'

import './Landing.css';


const Landing = (props) => {
  return (
    <div>
      <Header />
      <Archive />
      <About />
    </div>
  )
}

export default Landing;