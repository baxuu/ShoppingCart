import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SubmitMessage from '../../components/submitMessage/SubmitMessage';

Enzyme.configure({ adapter: new Adapter() });

describe('Submit Message', () => {
  it('snapshot test', () => {
    expect(
      shallow(<SubmitMessage />).contains(
        <h1 className='SubmitMessage'>
          Your order has been submitted successfully!
        </h1>
      )
    ).toBe(true);
  });
});
