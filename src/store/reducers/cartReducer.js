import * as types from '../actionTypes/cartActionTypes';

import { headphones } from '../../constants/products';

const initialState = {
  products: [headphones],
  shippingCost: 23.8,
  subTotal: 11.9,
  grandTotal: 35.7,
  showCart: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_PRODUCT_QUANTITY:
      return {
        products: state.products.find(
          (product) => action.payload === product.id
        ).quantity++,
        ...state,
      };
    case types.DECREMENT_PRODUCT_QUANTITY:
      return {
        products: state.products.find(
          (product) => action.payload === product.id
        ).quantity--,
        ...state,
      };
    case types.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => action.payload !== product.id
        ),
      };
    case types.EMPTY_CART:
      return {
        products: [],
        shippingCost: 0,
        subTotal: 0,
        grandTotal: 0,
        showCart: true,
      };
    case types.SUM_CART:
      const actTotal = state.products.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
      }, 0);
      const shippingPrice = actTotal >= 100 || actTotal === 0 ? 0 : 23.8;
      return {
        ...state,
        shippingCost: shippingPrice,
        subTotal: actTotal,
        grandTotal: actTotal + shippingPrice,
      };
    case types.CLOSE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };
    default:
      return state;
  }
};

export default cartReducer;
