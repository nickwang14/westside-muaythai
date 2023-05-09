import React, { useState, useEffect } from 'react'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import getWindowDimensions from '../util/getWindowDimensions'
import './Footer.css'

export default ({ globalSettings, socialSettings, navLinks }) => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const currentDate = Date.now().toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  return (
    <footer className='Footer'>
      <div className='container item'>
        <span>© 2021 All rights reserved.</span>
        <>This page was last updated: {currentDate}</>
      </div>
      <div className='container item'>
        <div className='social'>
          <a className='social' href='https://www.facebook.com/westsidemuaythaiottawa'>
            <FontAwesomeIcon icon={faFacebook} /> { windowDimensions.width > 600 ? 'westsidemuaythaiottawa': null}
          </a>
        </div>
        <div className='social'>
          <a className='social' href='https://www.instagram.com/westsidemuaythai'>
            <FontAwesomeIcon icon={faInstagram} /> { windowDimensions.width > 600 ? 'westsidemuaythai': null}
          </a>
        </div>
      </div>
    </footer>
)}
