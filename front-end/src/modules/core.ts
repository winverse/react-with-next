import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import produce from 'immer';
import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import { createReducer } from '../lib/utils';
import * as coreAPI from '../lib/api/core';

export type APIError = {
  message: string;
  body: {
    name: string;
    payload: boolean | string;
  };
};

const SET_DIMMER = 'core/SET_DIMMER';

// for API
export const TEST_HELLO = {
  REQUEST: 'core/TEST_HELLO_REQUEST',
  SUCCESS: 'core/TEST_HELLO_SUCCESS',
  FAILURE: 'core/TEST_HELLO_FAILURE',
};

export const setDimmer = createStandardAction(SET_DIMMER)<boolean>();
export const testHello = createAsyncAction(
  TEST_HELLO.REQUEST,
  TEST_HELLO.SUCCESS,
  TEST_HELLO.FAILURE,
)<{}, string, APIError>();

type SetDimmer = ReturnType<typeof setDimmer>;
type TestHelloRequest = ReturnType<typeof testHello.request>;

export type CoreState = {
  dimmer: boolean;
  hello: string;
};

const initialState: CoreState = {
  dimmer: false,
  hello: '',
};

function* getTestHello(action: TestHelloRequest) {
  try {
    const res = yield call(coreAPI.getHello);
    yield put(testHello.success(res.data));
  } catch (err) {
    yield put(testHello.failure(err));
  }
}

function* wathchGetTestHello() {
  yield takeLatest(TEST_HELLO.REQUEST, getTestHello);
}

export function* coreSaga() {
  yield all([fork(wathchGetTestHello)]);
}

const core = createReducer<CoreState>(
  {
    [SET_DIMMER]: (state, action: SetDimmer) =>
      produce(state, draft => {
        draft.dimmer = action.payload;
      }),
    [TEST_HELLO.SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.hello = action.payload;
      }),
  },
  initialState,
);

export default core;
