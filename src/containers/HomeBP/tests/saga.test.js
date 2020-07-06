import { put, takeLatest } from 'redux-saga/effects';

import { loadShowcases } from '../actions';

import saga, { loadShowcasesRequest } from '../saga';

describe('loadShowcasesRequest Saga', () => {
  let mainSaga;

  beforeEach(() => {
    mainSaga = saga();
  });

  it('Should get list of showcases TRIGGER', () => {
    const takeLatestDescriptor = mainSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(loadShowcases.TRIGGER, loadShowcasesRequest));
  });

  describe('loadShowcases actions', () => {
    let loadShowcasesGenerator;

    const response = [
      {
        title: 'First title',
      },
      {
        title: 'Second title',
      },
    ];

    beforeEach(() => {
      loadShowcasesGenerator = loadShowcasesRequest();

      const selectDescriptor = loadShowcasesGenerator.next().value;
      expect(selectDescriptor).toMatchSnapshot();
    });

    it('Should loadShowcasesRequest be success', () => {
      loadShowcasesGenerator.next(response);
      const putSuccess = loadShowcasesGenerator.next(response).value;
      loadShowcasesGenerator.next(response);

      expect(putSuccess).toEqual(put(loadShowcases.success(response)));
    });

    it('Should loadShowcasesRequest be FAILURE correctly', () => {
      const response = new Error('Some error');
      const putFailure = loadShowcasesGenerator.throw(response).value;

      expect(putFailure).toEqual(put(loadShowcases.failure(response)));
    });
  });
});
