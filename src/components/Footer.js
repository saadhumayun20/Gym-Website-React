import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Transform your physique today with Fit 4 U 
        </p>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>Contact Us</h2>
                <p className='footer-email'>
                Email us here: <a href='mailto:Humayun_Saad@hotmail.com'>Humayun_Saad@hotmail.com</a>
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
