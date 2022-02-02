import React, { useState } from 'react';
import close from '../Images/close.jpg';
import show from '../Images/show.jpg';
import './Header.css';

const Header = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSubMobileMenu, setSubShowMobileMenu] = useState(false);

    return <div className='bgsecondary'>
        <div className='header mw center'>
            <div className='header__left' >
                <a href="#">Impact</a>
            </div>
            <div className='header__right'>
                <a href="#" className='a'>Home</a>
                <a className="dropdown a">Dropdown <span className='dropbelow'></span>
                    <div className='menu'>
                        <a href="#">Menu 1</a>
                        <a className="menu2" href="#">
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
                <a className='a' href="#">Services</a>
                <a className='a' href="#">Blog</a>
                <a className='a' href="#">About</a>
                <a className='a' href="#">ContactUs</a>
            </div>
            <div className='menu-btn' onClick={() => setShowDrawer(true)}>
                <div></div>
                <div></div>
                <div></div>
            </div>


        </div>
        <div className={showDrawer ? " drawer" : "drawer-open drawer"} >
            <div className='drawer-cover' onClick={() => setShowDrawer(false)}></div>

            <div className='main-drawer'>
                <p className='close'>
                    <img src={close} onClick={() => setShowDrawer(false)} />
                </p>
                <ul className='mobile-main-menu'>

                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dropdown  </a>
                        <img className={showMobileMenu ? 'showmobilemenubtn rotate' : "showmobilemenubtn"} src={show} onClick={() => setShowMobileMenu(!showMobileMenu)} />
                    </li>
                    {showMobileMenu && <ul className='mobilemenu'>
                        <li>Menu One</li>
                        <li>Menu Two
                            <img className={showSubMobileMenu ? 'showmobilemenubtn rotate' : "showmobilemenubtn"} onClick={() => setSubShowMobileMenu(!showSubMobileMenu)} src={show} />
                        </li>
                        {showSubMobileMenu && <ul className='mobilemenu'>
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
    </div>
        ;
};

export default Header;
