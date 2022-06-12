import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Modify,decrement,Delete,Erase} from '../Redux/Actions'

export default function Panier() {
  const dispatch = useDispatch();
  const product=useSelector(state=>state);
const totalprice=()=>{ return product.reduce((tot,e)=>tot+( e.qt*e.price),0)

}
  return (
    <div>
      <h1>Total :{totalprice()}</h1>
      {console.log(totalprice())};
      <button onClick={(event)=>{
        event.preventDefault();
        dispatch(Erase())
      }}>
        <h2>Erase</h2>

      {console.log ("product",product)}
      </button>
        {product.map(e=>(<div>
          <p>{e.title}</p>
          
          <p>{e.price}</p>
          <button onClick={(event)=>{
            event.preventDefault();
            if(e.qt>0){
              dispatch(decrement(e))
            }
            
          }}>-</button>
          <p>{e.qt}</p>
          <button onClick={(event)=>{
            event.preventDefault();
            
            dispatch(Modify(e))
          }}>+</button>
          <button style={{backgroundColor:"red"}} onClick={(event)=>{
            event.preventDefault();
            dispatch(Delete(e));
          }}>
            X
          </button>
        </div>))}
        </div>
        
  )
}
