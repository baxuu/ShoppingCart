import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Cart from '../../components/Cart';

Enzyme.configure({ adapter: new Adapter() });

describe('Cart', () => {
  it('snapshot test', () => {
    const CartWrapper = shallow(<Cart />);
    expect(CartWrapper).toMatchSnapshot();
  });
});
