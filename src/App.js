import React from 'react';
import './App.css'; 
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';

function App() {
    return(
      <>
        <Navbar/>
        <Routes>
          <Route path='/'  element ={<Home/>}/>
          <Route path='/contact'  element ={<Contact/>}/>
          <Route path='/services'  element ={<Services/>}/>
          <Route path='/about us'  element ={<AboutUs/>}/>
        </Routes>
      </>
    )
}

export default App;
