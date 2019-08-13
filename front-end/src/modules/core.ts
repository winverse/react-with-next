import { createStandardAction } from 'typesafe-actions';
import produce from 'immer';
import { createReducer } from '../lib/utils';

const SET_DIMMER = 'core/SET_DIMMER';

export const setDimmer = createStandardAction(SET_DIMMER)<boolean>();

type SetDimmer = ReturnType<typeof setDimmer>;

export type CoreState = {
  dimmer: boolean;
};

const initialState: CoreState = {
  dimmer: false,
};

const core = createReducer<CoreState>(
  {
    [SET_DIMMER]: (state, action: SetDimmer) =>
      produce(state, draft => {
        draft.dimmer = action.payload;
      }),
  },
  initialState,
);

export default core;
