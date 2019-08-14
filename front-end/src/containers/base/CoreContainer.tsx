import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

interface OwnProps {}
interface StateProps {}
interface DispatchProps {}

type CoreProps = OwnProps & StateProps & DispatchProps;

const CoreContainer: React.FC<CoreProps> = () => {
  const dimmer = useSelector((state: RootState) => state.core.dimmer);

  console.log(dimmer);
  return <></>;
};

export default CoreContainer;
