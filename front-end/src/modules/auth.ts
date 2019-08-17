import { createStandardAction } from 'typesafe-actions';
import produce from 'immer';
import { createReducer } from '../lib/utils';

type AuthMode = 'LOGIN' | 'REGISTER' | '';

const SET_AUTH_MODE = 'auth/SET_AUTH_MODE';
const SET_AUTH_VISIBILITY = 'auth/SET_AUTH_VISIBILITY';

export const setAuthMode = createStandardAction(SET_AUTH_MODE)<AuthMode>();
export const setAuthVisibility = createStandardAction(SET_AUTH_VISIBILITY)<
  boolean
>();

type SetAuthMode = ReturnType<typeof setAuthMode>;
type SetAuthVisibility = ReturnType<typeof setAuthVisibility>;

export type AuthState = {
  visible: boolean;
  mode: AuthMode;
};

const initialState: AuthState = {
  visible: false,
  mode: 'LOGIN',
};

const auth = createReducer<AuthState>(
  {
    [SET_AUTH_MODE]: (state, action: SetAuthMode) =>
      produce(state, draft => {
        draft.mode = action.payload;
      }),
    [SET_AUTH_VISIBILITY]: (state, action: SetAuthVisibility) =>
      produce(state, draft => {
        draft.visible = action.payload;
      }),
  },
  initialState,
);

export default auth;
