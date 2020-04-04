import React from 'react';

import { Wrapper, HeaderBar, HeaderSpacer } from './styles';

const Header: React.FC = () => (
  <Wrapper>
    <HeaderBar>Fixed Header</HeaderBar>
    <HeaderSpacer />
  </Wrapper>
);

export default Header;
