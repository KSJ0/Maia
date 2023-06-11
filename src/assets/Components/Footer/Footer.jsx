import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/Main/BakeryLogo.png'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <section className='contact' id="contact">
            
            <div className='contact-box'>
                <Link to='/' className='logo'>
                    <img src={Logo} alt='MAIA LOGO' />
                </Link>

                <div className='icons'>
                    <Link to='https://www.facebook.com/maiabakeryph'><i class='bx bxl-facebook'></i></Link>
                    <Link to='https://instagram.com/maiabakeryph?igshid=YmMyMTA2M2Y='><i class='bx bxl-instagram-alt' ></i></Link>
                    <Link to='#'><i class='bx bxl-twitter' ></i></Link>
                    <Link to='#'><i class='bx bxl-youtube' ></i></Link>
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