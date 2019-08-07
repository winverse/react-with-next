import * as React from 'react';

import {
  HeaderBlock,
  HeaderLogo,
} from '../../components/base/Header';

interface HeaderContainerProps {}

const HeaderContainer: React.FC<HeaderContainerProps> = () => {
  return (
    <HeaderBlock>
      <HeaderLogo />
    </HeaderBlock>
  );
};

export default HeaderContainer;
