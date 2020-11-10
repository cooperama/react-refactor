import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Blog from './pages/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
