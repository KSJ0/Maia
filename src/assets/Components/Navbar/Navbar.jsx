import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/Main/BakeryLogo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <Link to='/' className="logo">
            <img src={Logo} alt="MAIA LOGO" />
        </Link>
    
        <ul class="navbar">
            <li><Link to='/' className='active'>Home</Link></li>
            <li><Link to='/Shop'>Shop</Link></li>
            <li><Link to='/About Us'>About Us</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
        </ul>

        <div class="header-icons">
            <a href="#"><i class='bx bx-search'></i></a>
            <a href="#"><i class='bx bxs-bell' ></i></a>
            <a href="#"><i class='bx bxs-cart' ></i></a>
            <div class="bx bx-menu" id="menu-icon"></div>
            {/* Darkmode */}
            <div class="bx bx-moon" id="darkmode"></div>
        </div>
    </div>
  );
}

export default Navbar;