import { put, takeLatest } from 'redux-saga/effects';

import { loadAuth } from '../actions';

import saga, { doLoadAuth } from '../saga';

describe('loadAuthRequest Saga', () => {
  let mainSaga;

  beforeEach(() => {
    mainSaga = saga();
  });

  it('Should get authenticated user TRIGGER', () => {
    const takeLatestDescriptor = mainSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(loadAuth.TRIGGER, doLoadAuth));
  });

  describe('loadAuthenticator actions', () => {
    let loadAuthGenerate;

    const response = {
      name: 'userName',
      status: 200,
    };

    beforeEach(() => {
      loadAuthGenerate = doLoadAuth();

      const selectDescriptor = loadAuthGenerate.next().value;
      expect(selectDescriptor).toMatchSnapshot();
    });

    it('Should loadAuthRequest be success', () => {
      loadAuthGenerate.next(response);
      const putSuccess = loadAuthGenerate.next(response).value;
      loadAuthGenerate.next(response);

      expect(putSuccess).toEqual(put(loadAuth.success(response)));
    });

    it('Should loadAuthRequest be failure', () => {
      const response = new Error('Some error');
      const putFailure = loadAuthGenerate.throw(response).value;

      expect(putFailure).toEqual(put(loadAuth.failure(response)));
    });
  });
});
