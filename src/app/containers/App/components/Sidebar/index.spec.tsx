import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '.';

describe('Sidebar', () => {
  it('should return a valid header', () => {
    const component = shallow(<Sidebar />);
    expect(component).toMatchSnapshot();
  });
});
