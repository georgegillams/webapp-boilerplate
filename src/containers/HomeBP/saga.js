import { takeLatest, put, call } from 'redux-saga/effects';

import request from 'utils/request';

import { loadShowcases } from './actions';

export function* loadShowcasesRequest() {
  const requestURL = 'https://us-central1-react-next-boilerplate-cda8b.cloudfunctions.net/getShowcasesData';

  try {
    yield put(loadShowcases.request());

    const result = yield call(request, requestURL);

    yield put(loadShowcases.success(result));
  } catch (err) {
    yield put(loadShowcases.failure(err));
  } finally {
    yield put(loadShowcases.fulfill());
  }
}

export default function* saga() {
  yield takeLatest(loadShowcases.TRIGGER, loadShowcasesRequest);
}
