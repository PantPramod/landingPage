import React, {useState} from 'react';
import close from '../Images/close.jpg';
import show from '../Images/show.jpg';
import './Header.css';

const Header = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSubMobileMenu, setSubShowMobileMenu] = useState(false);
     
  return<div className='bgsecondary'> 
  <div className='header mw center'>
      <div className='header__left' >
          <a href="#">Impact</a>
      </div>
      <div className='header__right'>
                  <a href="#">Home</a>
                  <a className="dropdown">Dropdown <span>^</span>
                  <div className='menu'>
                      <a href="#">Menu 1</a>
                      <a  className="menu2" href="#">
                          Menu2<span>^</span> 
                              
                          <div className='submenu'>
                              <a href="#">Submenu1</a>
                              <a href="#">Submenu2</a>
                              <a href="#">Submenu3</a>
                          </div>
                      
                      </a>   
                        
                    
                      <a href="#">Menu3</a>
                  </div>
                  </a>    
                  <a href="#">Services</a>
                  <a href="#">Blog</a>
                  <a href="#">About</a>
                  <a href="#">ContactUs</a>
      </div>
      <div className='menu-btn' onClick={()=>setShowDrawer(true)}>
          <div></div>
          <div></div>
          <div></div>
      </div>

     
  </div>
 <div className='drawer' style={showDrawer?{}:{transform: "translateX(100%)"}}>
   <div className='drawer-cover' onClick={()=>setShowDrawer(false)}></div>  
   <ul>
       <li onClick={()=>setShowDrawer(false)} className='close'>
           <img src={close}/>
           </li>
       <li><a href="#">Home</a></li>
       <li><a href="#">Dropdown  </a>
       <img  className='showmobilemenubtn' src={show} style={showMobileMenu?{transform:"rotate(180deg)"}:{}} onClick={()=>setShowMobileMenu(!showMobileMenu)}/> 
       </li>
            {showMobileMenu&&<ul className='mobilemenu'>
                <li>Menu One</li>
                <li>Menu Two 
                {/* <span className='showmobilemenubtn' >^</span> */}
                <img  className='showmobilemenubtn' style={showSubMobileMenu?{transform:"rotate(180deg)"}:{}}   onClick={()=>setSubShowMobileMenu(!showSubMobileMenu)} src={show} /> 
 
                </li>
                {showSubMobileMenu&&<ul className='mobilemenu'>
                <li>Sub Menu One</li>
                <li>Sub Menu Two</li>
                <li>Sub Menu Three</li>
            </ul>}
                <li>Menu Three</li>
            </ul>}    
       <li><a href="#">Services</a></li>
       <li><a href="#">Blog</a></li>
       <li><a href="#">About</a></li>
       <li><a href="#">Contact Us</a></li>
   </ul>
</div>
</div>
  ;
};

export default Header;
