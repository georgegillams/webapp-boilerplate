import { takeLatest, put, call, select } from 'redux-saga/effects';

import request from 'utils/request';
import apiStructure from 'helpers/apiStructure';

import { selectState } from './selectors';
import { verify } from './actions';
import { loadAuth } from '../Authenticator/actions';

export function* doVerify() {
  const currentState = yield select(selectState());
  const { token } = currentState;
  const requestURL = apiStructure.verifyEmail.fullPath;

  try {
    yield put(verify.request());

    const result = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({ verificationKey: token }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (result.error) {
      yield put(verify.failure(result));
    } else {
      yield put(verify.success(result));
      yield put(loadAuth.trigger());
    }
  } catch (err) {
    yield put(verify.failure(err));
  } finally {
    yield put(verify.fulfill());
  }
}
export default function* saga() {
  yield takeLatest(verify.TRIGGER, doVerify);
}
