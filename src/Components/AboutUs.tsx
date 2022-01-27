import React from 'react';
import aboutus from '../Images/aboutus.png'
import './AboutUs.css';
const AboutUs = () => {
  return <div style={{background:" var(  --bs-light) "}}>
           <div className='aboutus'>    
          <div className='aboutus__container1'>
            <div>
            <h2>Why You Should Choose Us</h2>
            <h3>Professional</h3>
            <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
            <h3>Good Review</h3>
            <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
            </div>
          </div>
          <div className='aboutus__container2'>
            <img src={aboutus}/>
          </div> 
          </div> 
  </div>;
};

export default AboutUs;

