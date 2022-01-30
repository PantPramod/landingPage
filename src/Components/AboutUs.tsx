import {useState} from 'react';
import aboutus from '../Images/aboutus.png'
import illustration from '../Images/illustration.jpg';
import pro from '../Images/pro.png';
import reviews from '../Images/reviews.png'
import './AboutUs.css';
import './YoutubePlayer.css';

const AboutUs = () => {
  const[showModal, setShowModal]=useState(false);
  
  

  return (<>
    
 
  <div style={{background:" var(  --bs-light) "}}>
           <div className='aboutus'>    
          <div className='aboutus__container1'>
            
              
            <h2>Why You Should Choose Us</h2>
            <div className='flex column div'>
                <div className='flex'>
                  <img src={pro} className='alignstart' style={{width:"50px", height:"50px", margin:"30px 30px 0 0px" }}/>  
                  <div>
                      <h3>Professional</h3>
                       <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                  </div>
                </div>

                 <div className='flex'>
                  <img src={reviews} className='alignstart'style={{width:"50px", height:"50px", margin:"30px 30px 0 0px"}} />
                  <div>
                       <h3>Good Review</h3>
                       <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                  </div>
                 </div>
                 </div> 
            </div>
          <div className='aboutus__container2'>
            <img src={aboutus}/>
          </div> 
          </div> 
  </div>
  <div style={{background:"white"}}>
     <div className='aboutus' style={{background:"white"}}>
       <div className='aboutus__container1'>
         <h2>Why Growing Your Business is Important</h2>
         <p>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae vitae nam facere hic quis voluptate cum quae. Deserunt, harum, incidunt ex nesciunt est temporibus ipsum, vel rem eveniet facere et velit sunt aspernatur eaque quis, dolorem magnam quisquam? Facere?</p>
         <button className='learnmore'><a href="#">Learn More</a></button> 
      </div>

      <div className='aboutus__container2'>
            <img src={illustration}/>
       </div> 
    </div>
  </div>

  <div className='container__select aboutus__container1'>
  
  <div className='flex div' style={{width:"100%"}}>
                <div className='flex' style={{padding:"0 15px"}}>
                  <img src={pro} className='alignstart' style={{width:"50px", height:"50px", margin:"30px 30px 0 0px" }}/>  
                  <div>
                      <h3>Professional</h3>
                       <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                  </div>
                </div>

                 <div className='flex'>
                  <img src={reviews} className='alignstart'style={{width:"50px", height:"50px", margin:"30px 30px 0 0px"}} />
                  <div>
                       <h3>Good Review</h3>
                       <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                  </div>
                 </div>

                 <div className='flex'>
                  <img src={reviews} className='alignstart'style={{width:"50px", height:"50px", margin:"30px 30px 0 0px"}} />
                  <div>
                      <h3>24/7 Support</h3>
                      <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                  </div>
                 </div>
                 </div>           
                </div>
                
            <div className='video__section'>
            { showModal &&
            <div className='youtubeplayer'>
            <svg onClick={()=>setShowModal(false)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" className="closeico svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>
          
           <iframe id="youtube-7739" frameBorder="0"    width="960" height="540" src="https://www.youtube-nocookie.com/embed/KI2lsdXJQ40?autoplay=1&mute=1"></iframe>
            </div>

            }          
              <div className='video__box1'>
                          <img src="https://untree.co/demos/impact/images/hero-min.jpg" onClick={()=>setShowModal(true)}/>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" onClick={()=>setShowModal(true)} data-icon="play" className="play svg-inline--fa fa-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M176 480C148.6 480 128 457.6 128 432v-352c0-25.38 20.4-47.98 48.01-47.98c8.686 0 17.35 2.352 25.02 7.031l288 176C503.3 223.8 512 239.3 512 256s-8.703 32.23-22.97 40.95l-288 176C193.4 477.6 184.7 480 176 480z"></path></svg>
              </div>
              <div className='video__box2'>
                          <div>    
                          <h2>Get Started with Impact</h2>
                          <p>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae.</p>
                          <ul>
                            <li>Deserunt harum incidunt</li>
                            <li>Ex nesciunt est temporibus ipsum</li>
                            <li>Vel rem eveniet facere et velit sunt</li>
                            <li>Aspernatur eaque quis</li>
                            <li>Dolorem magnam quisquam? Facere</li>
                          </ul>
                          <button className='learnmore'><a href="#">Learn More</a></button>
                          </div>
              </div>
            </div>
          
  </>);
};

export default AboutUs;

