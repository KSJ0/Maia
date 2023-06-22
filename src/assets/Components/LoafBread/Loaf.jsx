import React from 'react';
import './Loaf.css';
import Loaf1 from '../../img/Loaf Bread/bananaloaf_plain_6in.jpg';
import Loaf2 from '../../img/Loaf Bread/bloaf_ccwal.jpg';
import Loaf3 from '../../img/Loaf Bread/bloaf_wal.jpg';

const Loaf = () => {
  return (
    <div className="loaf-breads content">
          <h3 className="title">Loaf Breads</h3>
          <div className="card-deck">
            <div className="cards" id="loafbread-1">
              <div>
                <img
                  src={Loaf1}
                  alt="Plain Moist Banana Loaf"
                  id="items"
                />
              </div>
              <div className="description">Plain Moist Banana Loaf</div>
              <div className="price">Php 120.00</div>
              <div className="button">
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="cards" id="loafbread-2">
              <div>
                <img src={Loaf2} alt="Moist Banana Loaf with Walnuts" id="items" />
              </div>
              <div className="description">Moist Banana Loaf w/ Walnuts</div>
              <div className="price">Php 150.00</div>
              <div className="button">
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="cards" id="loafbread-3">
              <div>
                <img src={Loaf3} alt="Double Choclate Loaf" id="items" />
              </div>
              <div className="description">Double Chocolate Loaf</div>
              <div className="price">Php 180.00</div>
              <div className="button">
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Loaf
