import React from "react";
export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  return (
    <aside className=" text-light col-4 bg-secondary rounded">
      <h2 className="text-warning ">Cart Item</h2>

      {cartItems.length === 0 && <div>Cart is empty</div>}
    
      {cartItems.map((item) => (
        <div  className="row" >
         <div className="col-4 text-dark">
             <img src={item.image} className="w-50 rounded-circle" alt={item.category}/>
            <p className="text-white">{item.category}</p>
            </div>
         
            <div className="col-4 pt-3">
              <button onClick={() => onRemove(item)} className="remove rounded">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add rounded">
                +
              </button>
            </div>

            <div className="col-4 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
         
        </div>
      ))}
         {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-6">Items Price</div>
              <div className="col-6 text-right">Items Price :${itemsPrice.toFixed(2)}</div>
            </div>
            <button className="btn btn-primary">Purchase</button>
            </>
            )}
         
   
    </aside>
  );
}
