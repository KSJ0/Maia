import React from 'react'
import PNG1 from '../../img/Main/MAIA BAKERY.png'
import { Link } from 'react-router-dom'
import Shop from '../../Routes/Shop'
import './Intro.css'


const Intro = () => {
  return (
    <div>
        <section className='home' id="home">
            <div className='home-text'>
                <h1>Order Your <br/> Favourite Sweets.</h1>
                <p>We promise you'll enjoy every sweet moment to find your 
                    favourite. Eat what you love and save your time.</p>
                <div className='home-btnn'>
                    <Link to='/Shop' className='btn'>Place An Order</Link>
                </div>
            </div>

            <div className='home-img'>
                <img src={PNG1} />
            </div>
        </section>
    </div>
  )
}

export default Intro
