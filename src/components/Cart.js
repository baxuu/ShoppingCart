import React from 'react';

import ProductDetails from './productDetails/ProductDetails';
import ShippingCost from './shippingCost/ShippingCost';
import CartSummary from './cartSummary/CartSummary';
import CartHeader from './cartHeader/CartHeader';

import './Cart.scss';

const Cart = () => {
  return (
    <div className='Cart'>
      <CartHeader />
      <div className='cart__container'>
        <ProductDetails />
        <div className='cart__totals'>
          <ShippingCost />
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
