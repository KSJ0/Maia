import React from 'react'
import './Menu.css'
import Brownies2 from '../../img/Brownies/brownies 2.jpg'
import Cake1 from '../../img/Cakes/blueberry cheesecake2.jpg'
import Cookies1 from '../../img/Cookies/cookies.jpg'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <section className='menu' id="menu">
            <div className='center-text'>
                <strong>Our Popular Menu</strong>
                <h2>Some Popular Items</h2>
            </div>

            <div className='menu-content'>

                <div className='row'>
                    <div className='row-img'>
                        <img src={Brownies2} alt='Brownies'/>   
                    </div>
                    <h5>Chocolate Fudge Brownies with Walnut</h5>
                    <h6>₱180.00</h6>
                    {/* <div className='ratings-icons'>
                        <a href="#"><i class='bx bxs-star' style='color:#ffa50a' ></i></a>
                        <a href="#"><i class='bx bxs-star' style='color:#ffa50a' ></i></a>
                        <a href="#"><i class='bx bxs-star' style='color:#ffa50a' ></i></a>
                        <a href="#"><i class='bx bxs-star' style='color:#ffa50a' ></i></a>
                        <a href="#"><i class='bx bxs-star' style='color:#ffa50a' ></i></a>
                    </div> */}
                </div>

                <div className='row'>
                    <div className='row-img'>
                        <img src={Cake1} alt='Blueberry Cheesecake'/>   
                    </div>
                    <h5>Maia Blueberry Cheesecake Overload</h5>
                    <h6>₱1500.00</h6>
                    {/* <div className='ratings-icons'>
                        <a href="#"><i class='bx bxs-star' style='color:#ffa50a' ></i></a>
                        <a href="#"><i class='bx bxs-star' style='color:#ffa50a' ></i></a>
                        <a href="#"><i class='bx bxs-star' style='color:#ffa50a' ></i></a>
                        <a href="#"><i class='bx bxs-star' style='color:#ffa50a' ></i></a>
                        <a href="#"><i class='bx bxs-star' style='color:#ffa50a' ></i></a>
                    </div> */}
                </div>

                <div className='row'>
                    <div className='row-img'>
                        <img src={Cookies1} alt='Cookies'/>   
                    </div>
                    <h5>Maia Belgian Chocolate Chip Cookies</h5>
                    <h6>₱200.00</h6>
                    {/* <div className='ratings-icons'>
                        <a href="#"><i class='bx bxs-star' style='color:#ffa50a' ></i></a>
                        <a href="#"><i class='bx bxs-star' style='color:#ffa50a' ></i></a>
                        <a href="#"><i class='bx bxs-star' style='color:#ffa50a' ></i></a>
                        <a href="#"><i class='bx bxs-star' style='color:#ffa50a' ></i></a>
                        <a href="#"><i class='bx bxs-star' style='color:#ffa50a' ></i></a>
                    </div> */}
                </div>
            </div>

            <div className='menu-bttn'>
                <Link href='/Shop' class="btn">More Items</Link>
            </div>
        
        </section>
    </div>
  )
}

export default Menu
