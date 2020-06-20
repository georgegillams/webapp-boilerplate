import { takeLatest, put, call } from 'redux-saga/effects';

import request from 'utils/request';
import apiStructure from 'helpers/apiStructure';

import { loadAuth } from './actions';

export function* doLoadAuth() {
  // const currentState = yield select(selectState());
  // console.log(`currentState`, currentState);

  const requestURL = apiStructure.loadAuth.fullPath;

  try {
    yield put(loadAuth.request());

    const result = yield call(request, requestURL);

    yield put(loadAuth.success(result));
  } catch (err) {
    yield put(loadAuth.failure(err));
  } finally {
    yield put(loadAuth.fulfill());
  }
}

export default function* saga() {
  yield takeLatest(loadAuth.TRIGGER, doLoadAuth);
}
