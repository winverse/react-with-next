import { createStandardAction, ActionType } from 'typesafe-actions';
import produce from 'immer';
import { createReducer } from '../lib/utils';
import * as coreAPI from '../lib/api/core';

const SET_DIMMER = 'core/SET_DIMMER';

export const setDimmer = createStandardAction(SET_DIMMER)<boolean>();

export type SetDimmer = ActionType<typeof setDimmer>;

export type CoreState = {
  dimmer: boolean;
  hello: string;
};

const initialState: CoreState = {
  dimmer: false,
  hello: '',
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
