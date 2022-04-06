import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);



  return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <nav className='navbar'>
            <div className='navbar-container container'>
              <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
                <img src="images/LevelUp.png" height="45" width="140" alt="LevelUp" />
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/cours'className='nav-links'onClick={closeMobileMenu}>
                    Courses
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/assignements'className='nav-links'onClick={closeMobileMenu}>
                    Assignements
                  </Link>
                </li>
                <li className='nav-btn'>
                  {button ? (
                      <Link to='/sign-up' className='btn-link'>
                        <Button buttonStyle='btn--outline'>SIGN UP</Button>
                      </Link>
                  ) : (
                      <Link to='/sign-up' className='btn-link'>
                        <Button
                            buttonStyle='btn--outline'
                            buttonSize='btn--mobile'
                            onClick={closeMobileMenu}
                        >
                          SIGN UP
                        </Button>
                      </Link>
                  )}
                </li>
                <li className='nav-btn'>
                  {button ? (
                      <Link to='/sign-in' className='btn-link'>
                        <Button buttonStyle='btn--outline'>SIGN IN</Button>
                      </Link>
                  ) : (
                      <Link to='/sign-in' className='btn-link'>
                        <Button
                            buttonStyle='btn--outline'
                            buttonSize='btn--mobile'
                            onClick={closeMobileMenu}
                        >
                          SIGN IN
                        </Button>
                      </Link>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </IconContext.Provider>
      </>
  );
}

export default Navbar;