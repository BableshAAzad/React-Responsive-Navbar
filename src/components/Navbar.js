import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon, faHouse } from '@fortawesome/free-solid-svg-icons';

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

  let manuRef = useRef();
  useEffect(()=>{
    let handler = (e)=>{
      if(!manuRef.current.contains(e.target)){
        closeMobileMenu(false);
      }
    };
    document.addEventListener("mousedown",handler)
    return()=>{
      document.removeEventListener("mousedown", handler)
    }
  })

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container' ref={manuRef}>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            BableshAAzad.com&nbsp;
            <FontAwesomeIcon icon={faDragon} beat />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <FontAwesomeIcon icon={faHouse} />
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className="fa fa-fw fa-wrench"/>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              <i className="fa fa-fw fa-user"/>
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                <i className="fa fa-fw fa-envelope"></i>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>
          <i className="fa fa-fw fa-envelope"></i>
            SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;