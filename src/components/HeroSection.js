import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Modal from './Modal'; 
import { AuthContext } from './pages/AuthProvider';

function HeroSection() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);

  const handleNavClick = () => {
    if (user) {
      scrollToPrograms(); 
    } else {
      console.log('Navigating to sign-up');
      navigate('/sign-in'); 
      navigate()
    }
  };

  const scrollToPrograms = () => {
    window.scrollTo({
      top: 610,
      behavior: 'smooth',
    });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  

  return (
    <div className='hero-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>CHANGE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleNavClick}
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={openModal} 
        >
          ABOUT US
        </Button>
      </div>
      <Modal showModal={showModal} closeModal={closeModal} title="About Us">
        <p>
          Welcome to Fit 4 U! Our mission is to help you achieve your fitness goals with tailored
          programs and expert guidance. Whether you're a beginner or a seasoned athlete, we have 
          something for everyone.
        </p>
      </Modal>
    </div>
  );
}

export default HeroSection;
