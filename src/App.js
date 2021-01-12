import React from 'react';

import { useSelector } from 'react-redux';

import SubmitMessage from './components/submitMessage/SubmitMessage';
import Cart from './components/Cart';

import './App.scss';

const App = () => {
  const { showCart } = useSelector(({ cart }) => cart);

  return (
    <div className='Container'>{showCart ? <Cart /> : <SubmitMessage />}</div>
  );
};

export default App;
