import React from 'react';
import productList from "../data/productList"
import {Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import {Add,Modify} from '../Redux/Actions'
import {Link} from "react-router-dom"

const MainContent = () => {
    const search=(tab,id)=>{
        var test = false ;
        var  x=tab.find(e=>e.id===id);
       typeof(x)=== "undefined"? test=false:test=true;
        return test ;
    }
   
    const x = useSelector(state=>state);
    const dispatch = useDispatch();
    const Ajout=(e,title,price,id)=>{
        e.preventDefault();

        if(search(x,id)){
            console.log("includedd")
            dispatch(Modify({title,price,id}))
        }else{
            console.log("AJOUT")
            dispatch(Add({title,price,id}));
        }
        
        
        
        
        
    }
    const listItems = productList.map((item) => (
    <div className="card" key={item.id}>
        <div className="productImg">
            <img src= {item.image } alt=""/>

    </div>
    <div className="cardHeader">
        <h2> {item.title}</h2>
        
        <p className='price'>{item.price} <small> TND</small>  </p>
             
        <button  onClick= {(e)=>Ajout(e,item.title,item.price, item.id)}>Ajouter au panier </button>
    <Button >
        <Link to={`${item.id}`}
        
        state={{Trailer : item.image , description : item.description}}> informations </Link>
      </Button>

    </div>
    </div>
));
    return (
        <div className="main-content">
            {listItems}
        </div>
    );
}

export default MainContent;
