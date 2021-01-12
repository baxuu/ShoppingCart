import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import sumCartImage from '../../assets/edit-img.png';
import {
  incrementProductQuantity,
  decrementProductQuantity,
  sumCart,
} from '../../store/actions/cartActions';

import './ProductQuantity.scss';

const ProductQuantity = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();

  const handleIncrementQuantity = (id) => {
    setQuantity((prevState) => prevState + 1);
    dispatch(incrementProductQuantity(id));
  };

  const handleDecrementQuantity = (id) => {
    if (quantity > 0) {
      setQuantity((prevState) => prevState - 1);
      dispatch(decrementProductQuantity(id));
    }
  };
  const handleSumCart = () => {
    dispatch(sumCart());
  };

  return (
    <td>
      <button
        className='increment__button'
        onClick={() => handleDecrementQuantity(product.id)}
      >
        -
      </button>
      <input
        readOnly
        type='text'
        className='quantity__input'
        value={quantity}
      />
      <button
        className='increment__button'
        onClick={() => handleIncrementQuantity(product.id)}
      >
        +
      </button>
      <img
        src={sumCartImage}
        alt='update-shoping-img'
        className='updateCart__button'
        onClick={handleSumCart}
      />
    </td>
  );
};

ProductQuantity.propTypes = {
  product: PropTypes.object,
};

export default ProductQuantity;
