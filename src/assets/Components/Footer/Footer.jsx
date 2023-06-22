import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/Main/BakeryLogo.png';
import './Footer.css';
// import { BiLogoFacebookSquare } from "react-icons/bi";
// import { BiLogoInstagramAlt } from "react-icons/bi";
// import { BiLogoTwitter } from "react-icons/bi";
// import { BiLogoYoutube } from "react-icons/bi";

const Footer = () => {
  return (
    <div>
        <section className='contact' id="contact">
            
            <div className='contact-box'>
                <Link to='/' className='logo'>
                    <img src={Logo} alt='MAIA LOGO' />
                </Link>

                <div className='icons'>
                    {/* <Link to='https://www.facebook.com/maiabakeryph'><BiLogoFacebookSquare/></Link> */}
                    {/* <Link to='https://instagram.com/maiabakeryph?igshid=YmMyMTA2M2Y='><BiLogoInstagramAlt className='i'/></Link> */}
                    {/* <Link to='#'><BiLogoTwitter className='i'/></Link> */}
                    {/* <Link to='#'><BiLogoYoutube className='i'/></Link> */} 
                </div>
            </div>

            <div className='contact-box'>
                <h3>Shop</h3>
                <li><a href="about-us.html">About</a></li>
                <li><a href="#">Store Policy</a></li>
                <li><a href="#">Shipping/Pick-up</a></li>
                <li><a href="#">FAQ</a></li>
            </div>

            <div className='contact-box'>
                <h3>Opening Hours</h3>
                <p>
                    Mon - Fri : 7 am to 5 pm<br />
                    Sat: 7 am to 3 pm<br />
                    Sun: CLOSED
                </p>
            </div>

            <div className='contact-box'>
                <h3>Address</h3>
                <p>
                    Angeles St. Caingin Road<br />
                    Morong, Rizal PH 1960<br />
                    Tel: 0960-382-0758
                </p>
            </div>
            
        </section>
    </div>
  )
}

export default Footer