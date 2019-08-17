import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import { createReducer } from '../lib/utils';
import * as coreAPI from '../lib/api/core';

export type APIError = {
  message: string;
  body: {
    name: string;
    payload: boolean | string;
  };
};

const SET_HAZY = 'core/SET_HAZY';

// for API
export const TEST_HELLO = {
  REQUEST: 'core/TEST_HELLO_REQUEST',
  SUCCESS: 'core/TEST_HELLO_SUCCESS',
  FAILURE: 'core/TEST_HELLO_FAILURE',
};

export const setHazy = createStandardAction(SET_HAZY)<boolean>();

export const testHello = createAsyncAction(
  TEST_HELLO.REQUEST,
  TEST_HELLO.SUCCESS,
  TEST_HELLO.FAILURE,
)<{}, string, APIError>();

type SetHazy = ReturnType<typeof setHazy>;

type TestHelloRequest = ReturnType<typeof testHello.request>;

export type CoreState = {
  hazy: boolean;
  hello: string;
};

const initialState: CoreState = {
  hazy: false,
  hello: '',
};

const core = createReducer<CoreState>(
  {
    [SET_HAZY]: (state, action: SetHazy) =>
      produce(state, draft => {
        draft.hazy = action.payload;
      }),
    [TEST_HELLO.SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.hello = action.payload;
      }),
  },
  initialState,
);

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

export default core;
