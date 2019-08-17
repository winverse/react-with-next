import * as React from 'react';
import { useSelector } from 'react-redux';

import HazyLayer from '../../components/common/HazyLayer';
import { RootState } from '../../modules';

interface OwnProps {}
interface StateProps {}
interface DispatchProps {}

type CoreProps = OwnProps & StateProps & DispatchProps;
const CoreContainer: React.FC<CoreProps> = () => {
  const hazy = useSelector((state: RootState) => state.core.hazy);

  return (
    <>
      <HazyLayer visible={hazy} />
    </>
  );
};

export default CoreContainer;
