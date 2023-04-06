import React from 'react';
import topic from '../../assets/topic.png';
import './header.css';

const Header = () => (
  <div className="mainTopic__header section__padding" id="home">
    <div className="mainTopic__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with MAINTOPIC</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam ducimus at ad maiores suscipit molestias non odit quo doloremque aut nesciunt voluptates, earum dolorum totam nulla iure vitae deleniti?</p>
      <div className="mainTopic__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="mainTopic__header-content__people">
        
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="mainTopic__header-image">
      <img src={topic} alt="header"/>
    </div>
  </div>
);

export default Header;