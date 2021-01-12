import * as types from '../actionTypes/cartActionTypes';

export const incrementProductQuantity = (id) => {
  return {
    type: types.INCREMENT_PRODUCT_QUANTITY,
    payload: id,
  };
};
export const decrementProductQuantity = (id) => {
  return {
    type: types.DECREMENT_PRODUCT_QUANTITY,
    payload: id,
  };
};
export const removeProduct = (id) => {
  return {
    type: types.REMOVE_PRODUCT,
    payload: id,
  };
};
export const sumCart = () => {
  return {
    type: types.SUM_CART,
  };
};

export const emptyCart = () => {
  return {
    type: types.EMPTY_CART,
  };
};
export const closeCart = () => {
  return {
    type: types.CLOSE_CART,
  };
};
