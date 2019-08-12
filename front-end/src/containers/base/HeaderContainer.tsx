import * as React from 'react';

import {
  HeaderBlock,
  HeaderLogo,
  HeaderRight,
} from '../../components/base/Header';

interface HeaderContainerProps {}

const HeaderContainer: React.FC<HeaderContainerProps> = () => {
  return (
    <HeaderBlock>
      <HeaderLogo />
      <HeaderRight />
    </HeaderBlock>
  );
};

export default HeaderContainer;
