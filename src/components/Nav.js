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
  const [showNav, setShowNav] = useState(windowDimensions.width > 700)

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      setShowNav(windowDimensions.width > 700)
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);

  const expandNav = () => setShowNav(!showNav)
  const closeNav = () => windowDimensions.width <= 700 && setShowNav(false)

  return (
    <nav className='Nav'>
      {windowDimensions.width <= 700 && <MobileNav onClick={expandNav}/>}
      {showNav && <NavBar closeNav={closeNav}/>}
    </nav>
  )
}


const NavBar = ({closeNav}) => 
<div className='Nav--Container'>
  <Link to='/' onClick={closeNav}>
    <Logo />
  </Link>
  <NavLink style={{marginLeft:10}} to='/' exact onClick={closeNav}>
    Home
  </NavLink>
  <NavLink to='/schedule/' exact onClick={closeNav}>
    Schedule
  </NavLink>
  {/* <NavLink to='/about/' exact>
    About
  </NavLink>
  <NavLink to='/blog/' exact>
    Blog
  </NavLink> */}
  <NavLink to='/contact/' exact onClick={closeNav}>
    Contact
  </NavLink>
  {/* <NavLink to='/covid/' exact>
    Covid
  </NavLink> */}
  <NavLink to='/instructors/' exact onClick={closeNav}>
    Instructors
  </NavLink>
  {/* <NavLink to='/services/' exact>
    Services
  </NavLink> */}
</div>



const MobileNav = ({onClick}) =>
  <button className='Mobile--Nav' onClick={onClick}>
    <FontAwesomeIcon icon={faBars} size='2x'/>
  </button>
