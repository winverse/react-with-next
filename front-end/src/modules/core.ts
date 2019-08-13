import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import produce from 'immer';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { createReducer } from '../lib/utils';
import * as coreAPI from '../lib/api/core';

const SET_DIMMER = 'core/SET_DIMMER';
const TEST_HELLO = 'core/TEST_HELLO';
const TEST_HELLO_SUCCESS = 'core/TEST_HELLO_SUCCESS';
const TEST_HELLO_FAILURE = 'core/TEST_HELLO_FAILURE';

export const setDimmer = createStandardAction(SET_DIMMER)<boolean>();
export const testHello = createStandardAction(TEST_HELLO)<string>();

type SetDimmer = ReturnType<typeof setDimmer>;

export type CoreState = {
  dimmer: boolean;
  hello: string;
};

const initialState: CoreState = {
  dimmer: false,
  hello: '',
};

function* getTestHello(action) {
  try {
    const res = yield call(coreAPI.getHello);
    yield put({ type: 'TEST_HELLO', payload: res });
  } catch (e) {
    console.log(e);
  }
}

export function* coreSaga() {
  yield takeEvery('TEST_HELLO', getTestHello);
}

const core = createReducer<CoreState>(
  {
    [SET_DIMMER]: (state, action: SetDimmer) =>
      produce(state, draft => {
        draft.dimmer = action.payload;
      }),
    [TEST_HELLO]: (state, action) =>
      produce(state, draft => {
        console.log('action', action.payload.data);
        draft.hello = action.payload.data;
      }),
  },
  initialState,
);

export default core;
