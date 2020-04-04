import React from 'react';
import { shallow } from 'enzyme';

import Header from '.';

describe('Header', () => {
  it('should return a valid header', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
