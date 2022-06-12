import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function ProductRoute () {
    const {id}= useParams() ; 
    const location = useLocation() ; 
  return (
    <div className='pts'>
        <img alt=""  src={location.state.Trailer} />
        <p>{location.state.description}</p>
        
    </div>
  );
};