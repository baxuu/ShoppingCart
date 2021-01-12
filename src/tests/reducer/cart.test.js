import * as Actions from '../../store/actionTypes/cartActionTypes';
import { carts } from '../mocks/mocks';

import cartReducer from '../../store/reducers/cartReducer';

import { headphones } from '../../constants/products';

const productID = 1;

describe('event reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual({
      products: [headphones],
      shippingCost: 23.8,
      subTotal: 11.9,
      grandTotal: 35.7,
      showCart: true,
    });
  });
  it('should handle INCREMENT_PRODUCT_QUANTITY', () => {
    const incrementQuantity = {
      type: Actions.INCREMENT_PRODUCT_QUANTITY,
      payload: productID,
    };

    expect(
      cartReducer(
        {
          products: carts,
          shippingCost: 23.8,
          subTotal: 11.9,
          grandTotal: 35.7,
          showCart: true,
        },
        incrementQuantity
      )
    ).toEqual({
      products: carts,
      shippingCost: 23.8,
      subTotal: 11.9,
      grandTotal: 35.7,
      showCart: true,
    });
  });
  it('should handle DECREMENT_PRODUCT_QUANTITY', () => {
    const decrementQuantity = {
      type: Actions.DECREMENT_PRODUCT_QUANTITY,
      payload: productID,
    };

    expect(
      cartReducer(
        {
          products: carts,
          shippingCost: 23.8,
          subTotal: 11.9,
          grandTotal: 35.7,
          showCart: true,
        },
        decrementQuantity
      )
    ).toEqual({
      products: carts,
      shippingCost: 23.8,
      subTotal: 11.9,
      grandTotal: 35.7,
      showCart: true,
    });
  });
  it('should handle EMPTY_CART', () => {
    const emptyCart = {
      type: Actions.EMPTY_CART,
    };
    expect(
      cartReducer(
        {
          products: carts,
          shippingCost: 23.8,
          subTotal: 11.9,
          grandTotal: 35.7,
          showCart: true,
        },
        emptyCart
      )
    ).toEqual({
      products: [],
      shippingCost: 0,
      subTotal: 0,
      showCart: true,
      grandTotal: 0,
    });
  });
  it('should handle REMOVE_PRODUCT', () => {
    const deleteProduct = {
      type: Actions.REMOVE_PRODUCT,
      payload: productID,
    };
    expect(
      cartReducer(
        {
          products: carts,
          shippingCost: 23.8,
          subTotal: 11.9,
          grandTotal: 35.7,
          showCart: true,
        },
        deleteProduct
      )
    ).toEqual({
      shippingCost: 23.8,
      subTotal: 11.9,
      grandTotal: 35.7,
      showCart: true,
      products: carts.filter((cart) => cart.id !== productID),
    });
  });
});
