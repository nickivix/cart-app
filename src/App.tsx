import React from 'react';
import { Provider } from 'react-redux';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  return (
    <div>
      <Products />
      <ShoppingCart />
    </div>
  )
}

export default App