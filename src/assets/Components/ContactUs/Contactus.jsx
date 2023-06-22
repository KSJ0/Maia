import React from 'react';
import './Contactus.css';

const Contactus = () => {
  return (
    <div>
        <section className='contact-us-link' id="contactus">
        <div className='contact-us-text'>
            <h2>Have a Question?</h2>
            <p>
            At our bakery, we know that you may have questions about our delicious
            treats and bake goods. That's why we're here to help answer any
            questions you may have! Whether you're curious about our ingredients,
            want to know more about our baking process, or have questions about
            placing order, our team is here to provide you with the information
            you need.
            </p>
            <p>
            You can reach out to us through our website, email or Phone, and we
            we'll be more than happy to help. So don't hesitate to talk to talk to
            us anything - we're here to help you enjoy our treats to the fullest!
            </p>
        </div>
        <form id="myForm">
            <div className='form-group'>
            <label for="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                className='form-control'
                required
            />
            <label for="phone">Enter your phone number:</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                className='form-control'
                required
            />
            <small>Format: 0912-345-6789</small>
            <label for="email">E-mail</label>
            <input type="email" className='form-control' id="email" required />
            <textarea rows="10" cols="10">Type your message here...</textarea>
            <button>Submit</button>
            </div>
        </form>

        <div className='contact-group'>
            <h4>CONTACT ME</h4>
            <p>Tel: 0960-382-0758</p>
            <p>
            Email: <a href="mailto:contact@email.com">maiabakeryph@gmail.com</a>
            </p>
        </div>
        <div className='contact-group'>
            <h4>OPENING HOURS</h4>
            <p>Mon - Fri: 7AM-5PM</p>
            <p>Sat: 7AM-3PM</p>
            <p>Sun: CLOSED</p>
        </div>
        <div className='contact-group'>
            <h4>ADDRESS</h4>
            <p>Angeles St. Caingin Rd. Morong Rizal PH 1960</p>
        </div>

        {/* <div className='map-container'>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.1271550200977!2d121.2390196!3d14.5200209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c1c7e9ce511b%3A0x76a5850c314f15b8!2sCaingin%20Rd%2C%20Morong%2C%20Rizal!5e0!3m2!1sen!2sph!4v1651346925012!5m2!1sen!2sph"
            width="1000"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            ></iframe>
        </div> */}
        </section>
    </div>
    
  )
}

export default Contactus
