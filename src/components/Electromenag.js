import React from 'react';
import Header from './Header';
import MainContent from './MainContent';

import Footer from './Footer';
import {useSelector } from 'react-redux'

function Electromenag() {
 const produit =useSelector ( state => state);
 
  
  return (
   
    <div className="Electromenag"> 
    { console.log('shop cart',produit)}
      <Header/>
      <MainContent product={produit}/>
      <Footer/>
      </div>
  );
}

export default Electromenag;
