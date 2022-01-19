import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { products,onAdd, onRemove } = props;
 
  return (
    <main className="ms-4 col-7 bg-secondary rounded">
      <h2 className="text-white ">Products</h2>
      <div className="row ">
      
          {products&&products.map((product) => (
          <Product onRemove={onRemove} onAdd={onAdd} product={product}/>
          
          ))}
        </div>
  
    </main>
  );
}
