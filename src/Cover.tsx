import React from 'react';
import './Cover.css';
import persons1 from './Images/Persons1.png';
import persons2 from './Images/Persons2.png';

const Cover = () => {
  return <><div className='cover'>
        <div className='cover__left'>
             <img src={persons1}/>  
        </div>
        <div className='cover__mid'>
                 <div className='box1'> 
                    <h1>Let's growth your business with us</h1>
                    <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                    <button><a>Get In Touch</a></button>
                </div>
        </div>
        <div className='cover__right'>
        <img src={persons2}/> 
        </div>
  </div>
  
  <div className='cover2'>
  <div className='box2'>    
  <div className='box2__card'>
         <h3>Design</h3>
          <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
      </div>
      <div className='box2__card'>
         <h3>Applications</h3>
          <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
      </div>
     
      <div className='box2__card'>
         <h3>ECommerce</h3>
          <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
      </div>
      </div>
  </div>
  </>
  ;
};

export default Cover;
