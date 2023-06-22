import React from 'react';
import './Brownies.css';
import Brownies1 from '../../img/Brownies/brownies 1.jpg';
import Brownies2 from '../../img/Brownies/brownies 2.jpg';
import Brownies3 from '../../img/Brownies/brownies 3.jpg';
import Brownies4 from '../../img/Brownies/brownies 4.jpg';
import Brownies5 from '../../img/Brownies/brownies 5.jpg';
import Brownies6 from '../../img/Brownies/brownies 6.jpg';

const Brownies = () => {
  return (
    <div className="brownies content">
      <h3 className="title">Brownies</h3>
      <div className="card-deck">
        <div className="cards" id="brownies-1">
          <div>
            <img src={Brownies1} alt="Classic Fudge Choclate Brownies" id="items" />
          </div>
          <div className="description">Classic Fudgy Chocolate Brownies</div>
          <div className="price">Php 20.00</div>
          <div className="button">
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        <div className="cards" id="brownies-2">
          <div>
            <img src={Brownies2} alt="Walnut Fudge Brownies" id="items" />
          </div>
          <div className="description">Walnut Fudge Brownies</div>
          <div className="price">Php 20.00</div>
          <div className="button">
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        <div className="cards" id="brownies-3">
          <div>
            <img src={Brownies3} alt="Cream Cheese Frosted Brownies" id="items" />
          </div>
          <div className="description">Cream Cheese Frosted Brownies</div>
          <div className="price">Php 20.00</div>
          <div className="button">
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        <div className="cards" id="brownies-4">
          <div>
            <img src={Brownies4} alt="Peanut Butter Brownies" id="items" />
          </div>
          <div className="description">Peanut Butter Brownies</div>
          <div className="price">Php 20.00</div>
          <div className="button">
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        <div className="cards" id="brownies-5">
          <div>
            <img src={Brownies5} alt="Mint Chocolate Brownies" id="items" />
          </div>
          <div className="description">Mint Chocolate Brownies</div>
          <div className="price">Php 20.00</div>
          <div className="button">
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        <div className="cards" id="brownies-6">
          <div>
            <img src={Brownies6} alt="Caramel Brownies" id="items" />
          </div>
          <div className="description">Caramel Brownies</div>
          <div className="price">Php 20.00</div>
          <div className="button">
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brownies