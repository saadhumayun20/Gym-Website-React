import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {

  const navigate = useNavigate();

  const handleNavClick = () => {
    navigate('/sign-up')
  }

  return (
    <div className='hero-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>CHANGE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large' onClick={handleNavClick}>GET STARTED
         </Button>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>ABOUT US
         </Button>
      </div>
    </div>
  )
}

export default HeroSection;
