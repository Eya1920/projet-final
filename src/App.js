import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Electromenag from './components/Electromenag' 
import Router from './components/Router'

import Contact from './components/Contact'
import Panier from './components/Panier'
export default function App() {
  return ( 
    <div>
        <BrowserRouter>
        <button>
        <Link to="/">Home</Link></button>
            <Routes>
                <Route exact path="/" element={<Electromenag/>}/>
                <Route path="/:id" element={<Router/>} />
                <Route path="/Contact" element={<Contact/>} />
                <Route path="/Panier" element={<Panier/>} />

            </Routes>
        
        </BrowserRouter>

    </div>
    )
}