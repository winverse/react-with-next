import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import { TEST_HELLO_REQUEST } from '../../modules/core';

interface OwnProps {}
interface StateProps {}
interface DispatchProps {}

type CoreProps = OwnProps & StateProps & DispatchProps;

const { useEffect } = React;

const CoreContainer: React.FC<CoreProps> = () => {
  // const dimmer = useSelector((state: RootState) => state.core.dimmer);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('mount');
    dispatch({
      type: TEST_HELLO_REQUEST,
    });
  }, []);
  return <></>;
};

export default CoreContainer;
