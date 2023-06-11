import React from 'react'
// import '../App.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Intro from '../Components/Intro/Intro';
import Categories from '../Components/Categories/Categories';
import History from '../Components/History/History';
import Menu from '../Components/Menu/Menu';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Categories />
      <History />
      <Menu />
      <Footer />
    </div>
  );
}

export default Home