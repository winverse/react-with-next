import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../modules';

interface OwnProps {}
interface StateProps {
  dimmer: boolean;
}
interface DispatchProps {}

type CoreProps = OwnProps & StateProps & DispatchProps;

const CoreContainer: React.FC<CoreProps> = ({ dimmer }) => {
  console.log(dimmer);
  return <></>;
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  state => ({
    dimmer: state.core.dimmer,
  }),
)(CoreContainer);
