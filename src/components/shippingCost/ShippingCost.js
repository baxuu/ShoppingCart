import React from 'react';

import { useSelector } from 'react-redux';

import './ShippingCost.scss';

const ShippingCost = () => {
  const { shippingCost } = useSelector(({ cart }) => cart);

  return (
    <div className='ShippingCost'>
      <div>shipping</div>
      <div>${shippingCost && shippingCost.toFixed(2)}</div>
    </div>
  );
};

export default ShippingCost;
