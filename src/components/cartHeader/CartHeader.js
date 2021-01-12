import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { closeCart } from '../../store/actions/cartActions';

import './CartHeader.scss';

const CartHeader = () => {
  const { subTotal } = useSelector(({ cart }) => cart);

  const dispatch = useDispatch();
  const handleProceedCheckout = () => {
    subTotal > 0 ? dispatch(closeCart()) : window.alert('Cart is empty!');
  };
  return (
    <header className='CartHeader'>
      <h2>Shopping Cart</h2>
      <button className='checkout__button' onClick={handleProceedCheckout}>
        Proceed to checkout
      </button>
    </header>
  );
};

export default CartHeader;
