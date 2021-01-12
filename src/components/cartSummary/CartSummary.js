import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { closeCart } from '../../store/actions/cartActions';

import './CartSummary.scss';

const CartSummary = () => {
  const { subTotal, grandTotal } = useSelector(({ cart }) => cart);

  const dispatch = useDispatch();
  const handleProceedCheckout = () => {
    subTotal > 0 ? dispatch(closeCart()) : window.alert('Cart is empty!');
  };

  return (
    <div className='CartSummary'>
      <h2>cart totals</h2>
      <div className='container__position'>
        <div className='container__position-line'>
          <div className='position-line-name'>Subtotal</div>
          <div className='position_subtotal'>
            ${subTotal && subTotal.toFixed(2)}
          </div>
        </div>
        <div className='container__position-line'>
          <div className='position-line-name'>Grand Total</div>
          <div className='position_total'>
            ${grandTotal && grandTotal.toFixed(2)}
          </div>
        </div>
        <button className='proceed__button' onClick={handleProceedCheckout}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
