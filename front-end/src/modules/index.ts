import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import core, { CoreState, coreSaga } from './core';
import auth, { AuthState } from './auth';

export type RootState = {
  core: CoreState;
  auth: AuthState;
};

const rootReducer = combineReducers({
  core,
  auth,
});

export function* rootSaga() {
  yield all([coreSaga()]);
}

export default rootReducer;
