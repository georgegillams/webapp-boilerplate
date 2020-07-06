import { put, takeLatest } from 'redux-saga/effects';

import { loadShowcases } from '../actions';

import dataShowcases, { loadShowcasesRequest } from '../saga';

describe('loadShowcasesRequest Saga', () => {
  let mainSaga;

  beforeEach(() => {
    mainSaga = dataShowcases();
  });

  it('Should get list of showcases TRIGGER', () => {
    const takeLatestDescriptor = mainSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(loadShowcases.TRIGGER, loadShowcasesRequest));
  });

  describe('loadShowcases actions', () => {
    let loadShowcasesGenerate;

    const response = [
      {
        title: 'First title',
      },
      {
        title: 'Second title',
      },
    ];

    beforeEach(() => {
      loadShowcasesGenerate = loadShowcasesRequest();

      const selectDescriptor = loadShowcasesGenerate.next().value;
      expect(selectDescriptor).toMatchSnapshot();
    });

    it('Should loadShowcasesRequest be success', () => {
      loadShowcasesGenerate.next(response);
      const putShowcasesSuccess = loadShowcasesGenerate.next(response).value;
      loadShowcasesGenerate.next(response);

      expect(putShowcasesSuccess).toEqual(put(loadShowcases.success(response)));
    });

    it('Should loadShowcasesRequest be failure', () => {
      const response = new Error('Some error');
      const putShowcasesFailure = loadShowcasesGenerate.throw(response).value;

      expect(putShowcasesFailure).toEqual(put(loadShowcases.failure(response)));
    });
  });
});
