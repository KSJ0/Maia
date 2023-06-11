import React from 'react'
import './Ourstory.css'
import Main1 from '../../img/Main/MAIA BAKERY 2.png'

const OurStoy = () => {
  return (
    <div>
        <section className='about-us'>
            <div className='about-img'>
                <img src={Main1} alt="Maia Bakery Image" />
            </div>

            <div className='about-us-text'>
                <h2>Our Story</h2>
                <p>Maia Bakery started as a small, family-oned buisness run by our founder, Tin, and her husband. Tin had a
                    passion in baking from young age, and after yars if hining her skills in her home kitchen, she decided
                    to turn herpassion into a business. In the early days, Tin woul wake upbefore dawn to start baking and
                    work tirelessly thoughout the day to fullfill orders. Her husband would help with deliveries and
                    administrative task in the evenings after he finished his day job.</p>
                <p>Maia Bakery's bake goods quickly gained a reputation for bieng delicious and visually stunning. As word
                    of mouth spread, the customer base grew, and soon they were getting orders for weedings, birthdays, and
                    other special occasions.</p>
                <p>Maia Bekry's dedication to using only the finest ingredients and traditional baking methods quickly
                    became a hallmark ofthe business. Maia sources the best ingredients possible and make everything from
                    scatch, using time-honored techniques passed down through generations of bakers. As the company grew,
                    Maia remained committed toits roots and continued to operate with the same care and attention to deal it
                    had from the beginning.</p>
                <p>Today, Maia Bakery remains a family-owned business and still uses the same high-quality ingredients and
                    traditional methods that Tin started with. We're proud of our humble beginnings and stay dedicated to
                    tcreating delicious, visiually stunning baked goods that bring joy to our customers' lives.</p>
            </div>
        </section>
    </div>
  )
}

export default OurStoy
