import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TEST_HELLO } from '../../modules/core';
import { RootState } from '../../modules';

interface OwnProps {}
interface StateProps {}
interface DispatchProps {}

type CoreProps = OwnProps & StateProps & DispatchProps;

const { useEffect } = React;

const CoreContainer: React.FC<CoreProps> = () => {
  const comment = useSelector((state: RootState) => state.core.hello);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: TEST_HELLO.REQUEST,
    });
  }, []);
  return (
    <>
      <div>{comment}</div>
    </>
  );
};

export default CoreContainer;
