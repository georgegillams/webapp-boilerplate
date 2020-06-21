import { takeLatest, put, call, select } from 'redux-saga/effects';

import request from 'utils/request';
import apiStructure from 'helpers/apiStructure';
import { selectState } from './selectors';

import { login } from './actions';

export function* doLogin() {
  const currentState = yield select(selectState());
  const { credentials } = currentState;

  const requestURL = apiStructure.requestMagicLink.fullPath;

  try {
    yield put(login.request());

    // TODO should pass loginRedirect to the API
    const result = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({ ...credentials }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    yield put(login.success(result));
  } catch (err) {
    yield put(login.failure(err));
  } finally {
    yield put(login.fulfill());
  }
}

export default function* saga() {
  yield takeLatest(login.TRIGGER, doLogin);
}
