import React from 'react';
import { shallow } from 'enzyme';

import Loading from '.';

describe('Loading', () => {
  it('should return a custom loading', () => {
    const component = shallow(<Loading text="Custom loading" />);

    expect(component).toMatchSnapshot();
  });

  it('should return default loading', () => {
    const component = shallow(<Loading />);

    expect(component).toMatchSnapshot();
  });
});
