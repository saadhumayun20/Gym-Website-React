import React from 'react'
import Carditem from './Carditem'
import './Cards.css';

function Cards() {
    return (
      <div className='cards' id='programs-section'>
        <h1>Check out our programs!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
              <ul className='cards__items'>
                  <Carditem 
                  src='images/image-2.jpg'
                  text='Begin your journey today'
                  label='Beginner'
                  path='/programs/beginner'/>
                  <Carditem 
                  src='images/image-1.jpg'
                  text='Elevate your journey now'
                  label='Intermediate'
                  path='/programs/intermediate'/>
                  <Carditem 
                  src='images/image-3.jpg'
                  text='Become better than ever'
                  label='Advanced'
                  path='/programs/advanced'/>
              </ul>
          </div>
        </div>
      </div>
    );
  }
  

export default Cards
