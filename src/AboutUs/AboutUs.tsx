import { useState } from 'react';
import aboutus from '../Images/aboutus.png'
import illustration from '../Images/illustration.jpg';
import pro from '../Images/pro.png';
import reviews from '../Images/reviews.png'
import './AboutUs.css';
import YoutubePlayer from './YoutubePlayer';
import './YoutubePlayer.css';

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);



  return (<>


    <div className="bg-light">
      <div className='aboutus'>
        <div className='aboutus__container1'>
          <h2>Why You Should Choose Us</h2>
          <div className='flex column div'>
            <div className='flex'>
              <img src={pro} className='alignstart ico-style' />
              <div>
                <h3>Professional</h3>
                <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
              </div>
            </div>

            <div className='flex'>
              <img src={reviews} className='alignstart ico-style' />
              <div>
                <h3>Good Review</h3>
                <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='aboutus__container2'>
          <img src={aboutus} />
        </div>
      </div>
    </div>
    <div className='bg-white'>
      <div className='aboutus bg-white'>
        <div className='aboutus__container1'>
          <h2>Why Growing Your Business is Important</h2>
          <p>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae vitae nam facere hic quis voluptate cum quae. Deserunt, harum, incidunt ex nesciunt est temporibus ipsum, vel rem eveniet facere et velit sunt aspernatur eaque quis, dolorem magnam quisquam? Facere?</p>
          <button className='learnmore'><a href="#">Learn More</a></button>
        </div>

        <div className='aboutus__container2'>
          <img src={illustration} />
        </div>
      </div>
    </div>

    <div className='container__select aboutus__container1'>

      <div className='flex div full-width' >
        <div className='flex p15'>
          <img src={pro} className='alignstart ico-style' />
          <div>
            <h3>Professional</h3>
            <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
          </div>
        </div>

        <div className='flex'>
          <img src={reviews} className='alignstart ico-style' />
          <div>
            <h3>Good Review</h3>
            <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
          </div>
        </div>

        <div className='flex'>
          <img src={reviews} className='alignstart ico-style' />
          <div>
            <h3>24/7 Support</h3>
            <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
          </div>
        </div>
      </div>
    </div>

    <div className='video__section'>
      {showModal &&
        <YoutubePlayer OnClose={() => setShowModal(false)} />

      }
      <div className='video__box1'>
        <img src="https://untree.co/demos/impact/images/hero-min.jpg" onClick={() => setShowModal(true)} />
        <svg aria-hidden="true" focusable="false" data-prefix="fas" onClick={() => setShowModal(true)} data-icon="play" className="play svg-inline--fa fa-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M176 480C148.6 480 128 457.6 128 432v-352c0-25.38 20.4-47.98 48.01-47.98c8.686 0 17.35 2.352 25.02 7.031l288 176C503.3 223.8 512 239.3 512 256s-8.703 32.23-22.97 40.95l-288 176C193.4 477.6 184.7 480 176 480z"></path></svg>
      </div>
      <div className='video__box2'>
        <div>
          <h2>Get Started with Impact</h2>
          <p>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae.</p>
          <ul>
            <li><span>&#10003;</span>Deserunt harum incidunt</li>
            <li><span>&#10003;</span>Ex nesciunt est temporibus ipsum</li>
            <li><span>&#10003;</span>Vel rem eveniet facere et velit sunt</li>
            <li><span>&#10003;</span>Aspernatur eaque quis</li>
            <li><span>&#10003;</span>Dolorem magnam quisquam? Facere</li>
          </ul>
          <button className='learnmore'><a href="#">Learn More</a></button>
        </div>
      </div>
    </div>

  </>);
};

export default AboutUs;

