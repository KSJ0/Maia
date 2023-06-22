import React from 'react';
import './Cookies.css';
import Cookies1 from '../../img/Cookies/cookie_belgianchocochip.jpg';
import Cookies2 from '../../img/Cookies/cookie_oatmealwalnut.jpg';
import Cookies3 from '../../img/Cookies/cookie_cinnamonstreusel.jpg';
import Cookies4 from '../../img/Cookies/cookie_matchawithcc.jpg';
import Cookies5 from '../../img/Cookies/cookie_midnightsmores.jpg';
import Cookies6 from '../../img/Cookies/cookie_redvelvetwithcc.jpg';

const Cookies = () => {
  return (
    <div className="content">
        <div>
          <h1 className="main-title">Pick Your order</h1>
        </div>
        <div className="cookies">
          <h3 className="title">Cookies</h3>
          <div className="card-deck">
            <div className="cards" id="cookies-1">
              <div>
                <img
                  src={Cookies1}
                  alt="Belgian Chocolate Chip Cookies"
                  id="items"
                />
              </div>
              <div className="description">Belgian Chocolate Chip Cookies</div>
              <div className="price">Php 15.00</div>
              <div className="button">
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="cards" id="cookies-2">
              <div>
                <img
                  src={Cookies2}
                  alt="Chewy Chocolate Otmeal Cookies"
                  id="items"
                />
              </div>
              <div className="description">Chewy Chocolate Oatmeal Cookies</div>
              <div className="price">Php 15.00</div>
              <div className="button">
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="cards" id="cookies-3">
              <div>
                <img
                  src={Cookies3}
                  alt="Cinnamon Streusel Cookies"
                  id="items"
                />
              </div>
              <div className="description">Cinnamon Streusel Cookies</div>
              <div className="price">Php 15.00</div>
              <div className="button">
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="cards" id="cookies-4">
              <div>
                <img
                  src={Cookies4}
                  alt="Matcha Cream Cheese Cookies"
                  id="items"
                />
              </div>
              <div className="description">Matcha Cream Cheese Cookies</div>
              <div className="price">Php 15.00</div>
              <div className="button">
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="cards" id="cookies-5">
              <div>
                <img
                  src={Cookies5}
                  alt="Midnight Smores Cookies"
                  id="items"
                />
              </div>
              <div className="description">Midnight Smores Cookies</div>
              <div className="price">Php 15.00</div>
              <div className="button">
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="cards" id="cookies-6">
              <div>
                <img
                  src={Cookies6}
                  alt="Red Velvet Cream Cheese Cookies"
                  id="items"
                />
              </div>
              <div className="description">Red Velvet Cream Cheese Cookies</div>
              <div className="price">Php 15.00</div>
              <div className="button">
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Cookies;