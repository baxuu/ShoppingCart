import React from 'react';

import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from '../../App';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('connect to react redux', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      products: [
        {
          id: 1,
          name: 'bike',
          image: 'image.src',
          price: 13.9,
          quantity: 1,
        },
        {
          id: 2,
          name: 'camera',
          image: 'image.src',
          price: 3.9,
          quantity: 1,
        },
      ],

      shippingCost: 23.8,
      subTotal: 11.9,
      grandTotal: 35.7,
      showCart: true,
    });
  });
  it('snapshot test', () => {
    const appWrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(appWrapper).toMatchSnapshot();
  });
});
