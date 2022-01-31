import React from 'react';
import './Footer.css';
import fb from '../Images/fb.svg';

const Footer = () => {
    return <div className='footer'>
        <div className='footer__upper'>
            <div className='container1'>
                <h3 className='aboutImpact'>About Impact</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className='icon-group'>

                    <span><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="social svg-inline--fa fa-instagram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></span>
                    <span><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="social svg-inline--fa fa-twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg></span>

                    <span className='fb-img'>
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" className="social svg-inline--fa fa-facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path>
                        </svg>
                    </span>


                    <span><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" className="social svg-inline--fa fa-linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path></svg></span>
                    <span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="pinterest" className="social svg-inline--fa fa-pinterest" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path></svg>
                    </span>
                    <span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="dribbble" className="social svg-inline--fa fa-dribbble" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm163.1 114.4c29.5 36.05 47.37 81.96 47.83 131.1-6.984-1.477-77.02-15.68-147.5-6.818-5.752-14.04-11.18-26.39-18.62-41.61 78.32-31.98 113.8-77.48 118.3-83.52zM396.4 97.87c-3.81 5.427-35.7 48.29-111 76.52-34.71-63.78-73.18-116.2-79.04-124 67.18-16.19 137.1 1.27 190.1 47.49zm-230.5-33.25c5.585 7.659 43.44 60.12 78.54 122.5-99.09 26.31-186.4 25.93-195.8 25.81C62.38 147.2 106.7 92.57 165.9 64.62zM44.17 256.3c0-2.166 .043-4.322 .108-6.473 9.268 .19 111.9 1.513 217.7-30.15 6.064 11.87 11.86 23.92 17.17 35.95-76.6 21.58-146.2 83.53-180.5 142.3C64.79 360.4 44.17 310.7 44.17 256.3zm81.81 167.1c22.13-45.23 82.18-103.6 167.6-132.8 29.74 77.28 42.04 142.1 45.19 160.6-68.11 29.01-150 21.05-212.8-27.88zm248.4 8.489c-2.171-12.89-13.45-74.9-41.15-151 66.38-10.63 124.7 6.768 131.9 9.055-9.442 58.94-43.27 109.8-90.79 141.1z"></path></svg>
                    </span>
                </div>
            </div>
            <div className='container2'>
                <h3>Links</h3>
                <ul>
                    <li>About us</li>
                    <li>Services</li>
                    <li>News</li>
                    <li>Carrers</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div className='container2'>
                <h3>Company</h3>
                <ul>
                    <li>About us</li>
                    <li>Services</li>
                    <li>News</li>
                    <li>Carrers</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div className='container2'>
                <h3>Contact</h3>
                <ul>
                    <li>43 Raymouth Rd. Baltemoer, London 3910</li>
                    <li>+1(123)-456-7890</li>
                    <li>+1(123)-456-7890</li>
                    <li>info@mydomain.com</li>
                </ul>
            </div>
        </div>
        <div className='footer__lower'>
            <p>Copyright ©2022. All Rights Reserved. — Designed with love by
                <span> Untree.co • License</span> </p>
        </div>
    </div>;
};

export default Footer;
