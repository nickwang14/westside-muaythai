import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Logo from './Logo'
import getWindowDimensions from '../util/getWindowDimensions'
import NavLink from './NavLink'
import './Nav.css'

export default () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [showNav, setShowNav] = useState(windowDimensions.width > 650)

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      setShowNav(windowDimensions.width > 650)
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);

  const expandNav = () => setShowNav(!showNav)

  return (
    <nav className='Nav fade-in fade-out'>
      {windowDimensions.width <= 650 && <MobileNav onClick={expandNav}/>}
      {showNav && <NavBar onClick={expandNav}/>}
    </nav>
  )
}


const NavBar = () => 
<div className='Nav--Container container fade-in fade-out'>
  <Link to='/'>
    <Logo />
  </Link>
  <NavLink style={{marginLeft:10}} to='/' exact>
    Home
  </NavLink>
  <NavLink to='/schedule/' exact>
    Schedule
  </NavLink>
  {/* <NavLink to='/about/' exact>
    About
  </NavLink>
  <NavLink to='/blog/' exact>
    Blog
  </NavLink> */}
  <NavLink to='/contact/' exact>
    Contact
  </NavLink>
  <NavLink to='/covid/' exact>
    Covid
  </NavLink>
  <NavLink to='/personaltraining/' exact>
    Personal Training
  </NavLink>
</div>



const MobileNav = ({onClick}) =>
  <button className='Mobile--Nav container fade-in fade-out' onClick={onClick}>
    <FontAwesomeIcon icon={faBars} size='2x'/>
  </button>
