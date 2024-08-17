import { click } from '@testing-library/user-event/dist/click'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css'
import { Button } from './Button'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    const scrollToTop = () => {
        closeMobileMenu();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    
    const scrollToPrograms = () => {
    closeMobileMenu(); 
        window.scrollTo({
            top: 610,
            behavior: 'smooth',
            });
    };
    
    const handleProgramsClick = () => {
        closeMobileMenu();
        if (window.location.pathname !== '/') {
          window.location.href = '/#programs-section';
        } else {
          scrollToPrograms();
        }
      };
    
    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton)
  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="/" className='navbar-logo' onClick={scrollToTop}>
          F4U
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to="/" className='nav-links' onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
          <Link to="/#programs-section" className='nav-links' onClick={handleProgramsClick}>
            Programs
            </Link>
          </li>
          <li className='nav-item'>
              <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  </>
);
}
export default Navbar
