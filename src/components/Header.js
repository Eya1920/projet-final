
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Link } from "react-router-dom";

import logo from './top-electro-logo.png'

function Header() {
  return(
      <nav className='header'>
          <img className='logo' src={logo} alt=''/>
          <div className='header-search'>
          <nav className="navbar navbar-light bg-transparent ">
          <div className='headerSearch col-12'>        
          <form className="form-inline  ">
  <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
  <button className="btn btn-warning  my-2 my-sm-0" type="submit">Search
  </button>


</form>
</div> 
</nav>
                      
          </div>
          
         
         
            <ul className='listy' >
              
              <Link to="/Contact"><li>Contact</li></Link>
              
              <Link to="/Panier"><li>Panier</li></Link>
              
               
            </ul>

            
      </nav>
      
      
  )
  
}

export default Header;
