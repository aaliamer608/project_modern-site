import React from 'react'

import Feature  from '../../components/feature/Feature'
import './mainTopic.css'

const MainTopic = () => (
    
 <div className="mainTopic__whatis section__margin" id="wmainTopic">
    <div className="mainTopic__whatis-feature">
      <Feature title="MainTopic-Title" text="    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus autem sapiente voluptates perspiciatis laboriosam quidem commodi necessitatibus consequuntur, aliquid temporibus asperiores ad non neque repellendus vitae soluta dolorum ipsam! Enim!." />
    </div>
    <div className="mainTopic__whatis-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="mainTopic__whatis-container">
      <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla sapiente autem officiis itaque iure tenetur incidunt adipisci quae animi.." />
      <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla sapiente autem officiis itaque iure tenetur incidunt adipisci quae animi." />
      <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla sapiente autem officiis itaque iure tenetur incidunt adipisci quae animi." />
    </div>
  </div>


  );

export default MainTopic