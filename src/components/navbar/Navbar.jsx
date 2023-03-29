import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  return (
      <div className='mainTopic__navbar'>
        <div className='mainTopic__navbar-links'>
          <div className='mainTopic__navbar-links_logo'>
            <img src={logo} alt="logo"/>
          </div>
          <div className="mainTopic__navbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#mainTopic">TOPIC HERE</a></p>
            <p><a href="#possibility">Possibility</a></p>
            <p><a href="#features">Featcure</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
        </div>
      </div>
  )
}

export default Navbar