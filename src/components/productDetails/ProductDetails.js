import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { removeProduct, sumCart } from '../../store/actions/cartActions';
import ProductQuantity from '../productQuantity/ProductQuantity';
import deleteProductImage from '../../assets/x-img.png';

import './ProductDetails.scss';

const ProductDetails = () => {
  const { products } = useSelector(({ cart }) => cart);

  const dispatch = useDispatch();

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
    dispatch(sumCart());
  };

  const handleSumCart = () => {
    dispatch(sumCart());
  };

  return (
    <div className='ProductDetails'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Qty</th>
          </tr>
        </thead>

        <tbody>
          {products.length ? (
            products.map((product, idx) => (
              <tr key={idx}>
                <td>
                  <img
                    className='delete_product'
                    src={deleteProductImage}
                    alt='delete-product'
                    onClick={() => handleRemoveProduct(product.id)}
                  />
                </td>
                <td>
                  <img
                    className='product-photo'
                    src={product.image}
                    alt='headphones-product'
                  />
                </td>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <ProductQuantity product={product} />
              </tr>
            ))
          ) : (
            <tr>
              <td className='noItems__info'>No items found!</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className='ProductDetails_button'>
        <button className='checkout__button' onClick={handleSumCart}>
          Update Shopping Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
