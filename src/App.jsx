import { useState } from 'react'
import './App.css'
import Home from './assets/Routes/Home'
import Shop from './assets/Routes/Shop'
import AbouttUs from './assets/Routes/AboutUs'
import Contact from './assets/Routes/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/About Us' element={<AbouttUs />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;