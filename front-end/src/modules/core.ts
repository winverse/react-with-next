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
export const TEST_HELLO_REQUEST = 'core/TEST_HELLO_REQUEST';
const TEST_HELLO_SUCCESS = 'core/TEST_HELLO_SUCCESS';
const TEST_HELLO_FAILURE = 'core/TEST_HELLO_FAILURE';

export const setDimmer = createStandardAction(SET_DIMMER)<boolean>();
export const testHello = createAsyncAction(
  TEST_HELLO_REQUEST,
  TEST_HELLO_SUCCESS,
  TEST_HELLO_FAILURE,
)<any, any, APIError>();

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

// function* watchLoadHashtagPosts() {
//   yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
// }

function* getTestHello(action: TestHelloRequest): Generator {
  console.log('hello', action);
  try {
    const res = yield call(coreAPI.getHello);
    console.log('res', res);
    yield put(testHello.success(res));
  } catch (err) {
    yield put(testHello.failure(err));
  }
}

function* wathchGetTestHello() {
  yield takeLatest(TEST_HELLO_REQUEST, getTestHello);
}

export function* coreSaga() {
  console.log('coreSaga');
  yield all([fork(wathchGetTestHello)]);
}

const core = createReducer<CoreState>(
  {
    [SET_DIMMER]: (state, action: SetDimmer) =>
      produce(state, draft => {
        draft.dimmer = action.payload;
      }),
    [TEST_HELLO_REQUEST]: (state, action) =>
      produce(state, draft => {
        console.log('action in draft', action);
        // draft.hello = action;
      }),
  },
  initialState,
);

export default core;
