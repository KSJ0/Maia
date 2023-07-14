import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/Main/BakeryLogo.png'
import './Navbar.css'
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillBell } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
// import { BiMoon } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className='Navbar'>
        <Link to='/' className="logo">
            <img src={Logo} alt="MAIA LOGO" />
        </Link>
    
        <ul class="navbar">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Shop'>Shop</Link></li>
            <li><Link to='/About Us'>About Us</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
        </ul>

        <div class="header-icons">
            <a href="#"><AiOutlineSearch className='i'/></a>
            <a href="#"><AiFillBell className='i'/></a>
            <a href="#"><AiOutlineShoppingCart className='i'/></a>
            <div class="bx bx-menu" id="menu-icon"><BiMenu className='i'/></div>
            {/* Darkmode */}
            {/* <div class="bx bx-moon" id="darkmode"><BiMoon className='i'/></div> */}
        </div>
    </div>
  );
}

export default Navbar;