import * as React from 'react';
import { useDispatch } from 'react-redux';

import {
  HeaderBlock,
  HeaderLogo,
  HeaderRight,
} from '../../components/base/Header';
import { SET_HAZY } from '../../modules/core';

interface HeaderContainerProps {}

const HeaderContainer: React.FC<HeaderContainerProps> = () => {
  const dispatch = useDispatch();
  const onClickLogin = () => {
    console.log('hello');
    dispatch({
      type: SET_HAZY,
      payload: true,
    });
  };
  return (
    <HeaderBlock>
      <HeaderLogo />
      <HeaderRight onClickLogin={onClickLogin} />
    </HeaderBlock>
  );
};

export default HeaderContainer;
