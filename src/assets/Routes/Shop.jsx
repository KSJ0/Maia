import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Cookies from '../Components/Cookies/Cookies';
import Footer from '../Components/Footer/Footer';
import Brownies from '../Components/Brownies/Brownies';
import Loaf from '../Components/LoafBread/Loaf';
import Cake from '../Components/Cakes/Cake';

const Shop = () => {
  return (
    <div>
      <Navbar />
      <Cookies />
      <Brownies />
      <Loaf />
      <Cake />
      <Footer />
    </div>
  );
};

export default Shop;