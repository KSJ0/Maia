import React from 'react';
import './Cake.css';
import Cake1 from '../../img/Cakes/espresso cake1.jpg';
import Cake2 from '../../img/Cakes/espresso cake2.jpg';
import Cake3 from '../../img/Cakes/blueberry cheesecake2.jpg';

const Cake = () => {
  return (
    <div className='cakes content'>
        <h3 className="title">Cakes</h3>
        <div className="card-deck">
            <div className="cards" id='cake-1'>
                <div>
                    <img src={Cake1} alt='Cookie Waffle Chocolate Cake' id='items'/>
                </div>
                <div className="description">Cookie Waffle Chocolate Cake</div>
                <div className="price">Php 600.00</div>
                <div className="button">
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div className="cards" id='cake-2'>
                <div>
                    <img src={Cake2} alt='Milky Caramel Buttered Cake' id='items'/>
                </div>
                <div className="description">Milky Caramel Buttered Cake</div>
                <div className="price">Php 650.00</div>
                <div className="button">
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div className="cards" id='cake-3'>
                <div>
                    <img src={Cake3} alt='Blueberry Cheesecake' id='items'/>
                </div>
                <div className="description">Blueberry Cheesecakes</div>
                <div className="price">Php 600.00</div>
                <div className="button">
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>
        <div className='checkout'>
            <p id='total-price'>Total: Php 0.00</p>
            <button id='checkout'>Checkout</button>
        </div>
    </div>
  );
;}

export default Cake;