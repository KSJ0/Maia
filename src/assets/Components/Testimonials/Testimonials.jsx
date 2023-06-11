import React from 'react'
import './Testimonial.css'
import Main3 from '../../img/Main/MAIA BAKERY 3.png'

const Testimonials = () => {
  return (
    <div>
        <section className='testimonial' id="testimonial">
            <div className='testimonial-left'>
                <strong>Testimonials</strong>
                <h2>What People Say <br /> About Us</h2>
            </div>

            <div className='testimonial-right'>
                <div className='testimonial-img'>
                    <img src={Main3} alt='MAIA Picture' />
                </div>
                <h4>Venus San Diego</h4>
                <h6>Paranaque City</h6>
                <p>"The taste was excellent. The delivery was good, very fast response. The brownies are superb!"</p>
            </div>
        </section>
    </div>
  )
}

export default Testimonials