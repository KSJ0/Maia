import React from 'react'
import './Categories.css'
import Cookies1 from '../../img/Cookies/cookies.jpg'
import Brownies1 from '../../img/Brownies/brownies 5.jpg'
import Loaf1 from '../../img/Loaf Bread/bananaloaf_plain_6in.jpg'
import Cake1 from '../../img/Cakes/blueberry cheesecake2.jpg'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div>
        <section className='categories'>
            <div className='center-text'>
                <strong>Categories</strong>
                <h2>Our Categories Menu</h2>
            </div>
        </section>

        <div className='categories-content'>
            <div className='box'>
                <div className='box-img'>
                    <img src={Cookies1} alt='Cookies' />
                </div>
                <h3>Cookies</h3>
                <p>Cookies in the morning, cookies late at night. Cookies all day, here take another bite!</p>
                <div className='categories-bttn'>
                    <Link to='/Shop' className='btn'>View More</Link>
                </div>
            </div>
        
            <div className='box'>
                <div className='box-img'>
                    <img src={Brownies1} alt='Brownies' />
                </div>
                <h3>Brownies</h3>
                <p>Brownies are like spare batteries. One could never have too many in the house.</p>
                <div className='categories-bttn'>
                    <Link to='/Shop' className='btn'>View More</Link>
                </div>
            </div>
    
            <div className='box'>
                <div className='box-img'>
                    <img src={Loaf1} alt='Banana Load Bread' />
                </div>
                <h3>Loaf Bread</h3>
                <p>A loaf of fresh homemade bread is always a pleasure to enjoy! Soft, fluffy and delicious!</p>
                <div className='categories-bttn'>
                    <Link to='/Shop' className='btn'>View More</Link>
                </div>
            </div>
    
            <div className='box'>
                <div className='box-img'>
                    <img src={Cake1} alt='Blueberry Cheesecake' />
                </div>
                <h3>Cakes</h3>
                <p>The taste of festival in every bite. Genuine price, great quality and amazing taste!</p>
                <div className='categories-bttn'>
                    <Link to='/Shop' className='btn'>View More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories
