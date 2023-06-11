import React from 'react'
import './History.css'
import Main1 from '../../img/Main/MAIA BAKERY 2.png'
import { Link } from 'react-router-dom'

const History = () => {
  return (
    <div>
      <section className='history' id="history">
        <div className='history-img'>
            <img src={Main1} alt='Maia Picture'/>
        </div>

        <div className='history-text'>
            <strong>Our History</strong>
            <h2>Discover Our Humble Beginnings.</h2>
            <p>Maia Bakery intends to serve the most innovative and mouth-watering baked goods to 
                help you make your festival considerably increasingly unique.</p>
                <Link to='/About Us' className='btn'>Learn More</Link>
        </div>
    </section>
    </div>
  )
}

export default History