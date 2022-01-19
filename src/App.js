
import { useState } from 'react';
import './App.css';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import data from './Data';
function App(props) {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div >
    <Header countCartItems={cartItems.length}/>
    <div  className="row p-2  gap-2">
    <Main onRemove={onRemove} onAdd={onAdd} products={products} />
    <Basket  onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}/>
    </div>
    </div>
    
  );
}

export default App;
