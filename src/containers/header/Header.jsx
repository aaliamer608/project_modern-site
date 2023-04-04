import React from 'react';
import people from '../../assets/people.png';
import topic from '../../assets/topic.png';
import './header.css';

const Header = () => (
  <div className="mainTopic__header section__padding" id="home">
    <div className="mainTopic__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with MAINTOPIC</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="mainTopic__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="mainTopic__header-content__people">
        
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="mainTopic__header-image">
      <img src={topic} alt="header-image"/>
    </div>
  </div>
);

export default Header;