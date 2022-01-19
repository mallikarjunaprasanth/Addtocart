import React from 'react'
import '../App.css';
export default function Product(props) {
    const { product,onAdd}= props;
    return (
        <div className="col-3 wrapper text-white">
            <img src={product.image} className="w-100" alt={product.title} />
            <p>{product.title}</p>
            <p>{product.rating.rate}</p>
            <p> Price :{product.price}</p>
            <div> <button onClick={()=>onAdd(product)}>add to cart</button></div>
            
           
        
        </div>
    )
} 
