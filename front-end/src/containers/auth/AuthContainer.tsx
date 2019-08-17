import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthModal from '../../components/auth/modal/AuthModal';
import { RootState } from '../../modules';
import { setHazy } from '../../modules/core';
import { setAuthVisibility } from '../../modules/auth';

const { useCallback } = React;

interface AuthContainerProps {}

const AuthContainer: React.FC<AuthContainerProps> = () => {
  const { visivble } = useSelector((state: RootState) => ({
    visivble: state.auth.visible,
  }));

  const dispatch = useDispatch();

  const onClose = useCallback(() => {
    dispatch(setHazy(false));
    dispatch(setAuthVisibility(false));
  }, [visivble]);

  return <AuthModal visible={visivble} onClose={onClose} />;
};

export default AuthContainer;
