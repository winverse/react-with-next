import * as React from 'react';
import { useDispatch } from 'react-redux';

import {
  HeaderBlock,
  HeaderLogo,
  HeaderRight,
} from '../../components/base/Header';
import { setHazy } from '../../modules/core';
import { setAuthMode, setAuthVisibility } from '../../modules/auth';

const { useCallback } = React;

interface HeaderContainerProps {}

const HeaderContainer: React.FC<HeaderContainerProps> = () => {
  const dispatch = useDispatch();
  const onClickLogin = useCallback(() => {
    dispatch(setHazy(true));
    dispatch(setAuthMode('LOGIN'));
    dispatch(setAuthVisibility(true));
  }, []);
  return (
    <HeaderBlock>
      <HeaderLogo />
      <HeaderRight onClickLogin={onClickLogin} />
    </HeaderBlock>
  );
};

export default HeaderContainer;
