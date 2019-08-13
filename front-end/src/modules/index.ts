import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import core, { CoreState, coreSaga } from './core';

export type RootState = {
  core: CoreState;
};

export function* rootSaga() {
  yield all([coreSaga()]);
}

const rootReducer = combineReducers({
  core,
});

export default rootReducer;
