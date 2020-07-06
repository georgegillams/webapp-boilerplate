import { put, takeLatest } from 'redux-saga/effects';

import { load, remove, requestMagicLink } from '../actions';

import saga, { doLoad, doRemove, doRequestMagicLink } from '../saga';

describe('AdminUsers saga', () => {
  let mainSaga;

  beforeEach(() => {
    mainSaga = saga();
  });

  it('Should load on load TRIGGER', () => {
    const takeLatestDescriptor = mainSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(load.TRIGGER, doLoad));
  });

  it('Should remove on remove TRIGGER', () => {
    mainSaga.next();
    const takeLatestDescriptor = mainSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(remove.TRIGGER, doRemove));
  });

  it('Should request on request TRIGGER', () => {
    mainSaga.next();
    mainSaga.next();
    const takeLatestDescriptor = mainSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(requestMagicLink.TRIGGER, doRequestMagicLink));
  });

  describe('admin user actions', () => {
    let loadGenerator;
    let removeGenerator;
    let requestGenerator;

    const loadResponse = {
      users: ['user1', 'user2'],
      status: 200,
    };
    const removeResponse = {
      success: 'User removed',
      status: 200,
    };
    const requestResponse = {
      success: 'Magic link sent',
      status: 200,
    };

    beforeEach(() => {
      loadGenerator = doLoad();
      removeGenerator = doRemove();
      requestGenerator = doRequestMagicLink();

      const selectLoadDescriptor = loadGenerator.next().value;
      const selectRemoveDescriptor = removeGenerator.next().value;
      const selectRequestDescriptor = requestGenerator.next().value;
      expect(selectLoadDescriptor + selectRemoveDescriptor + selectRequestDescriptor).toMatchSnapshot();
    });

    it('Should call load.success on successful API call', () => {
      const response = loadResponse;
      loadGenerator.next();
      const putSuccess = loadGenerator.next(response).value;
      loadGenerator.next();

      expect(putSuccess).toEqual(put(load.success(response.users)));
    });

    it('Should call verify.failure if API returns error', () => {
      const response = {
        error: 'error_type',
        errorMessage: 'Error message',
        status: 500,
      };
      loadGenerator.next();
      const putFailure = loadGenerator.next(response).value;
      loadGenerator.next();

      expect(putFailure).toEqual(put(load.failure(response)));
    });

    it('Should call verify.failure if an exception occurs', () => {
      const response = new Error('Some error');
      const putFailure = loadGenerator.throw(response).value;

      expect(putFailure).toEqual(put(load.failure(response)));
    });

    it('Should call remove.success on successful API call', () => {
      const response = removeResponse;
      removeGenerator.next({ userToRemove: { id: 'u1' } });
      removeGenerator.next();
      const putSuccess = removeGenerator.next(response).value;
      removeGenerator.next();

      expect(putSuccess).toEqual(put(remove.success(response)));
    });

    it('Should call load.trigger on successful API call', () => {
      const response = removeResponse;
      removeGenerator.next({ userToRemove: { id: 'u1' } });
      removeGenerator.next();
      removeGenerator.next(response);
      const putSuccess = removeGenerator.next().value;
      removeGenerator.next();

      expect(putSuccess).toEqual(put(load.trigger()));
    });

    it('Should call remove.failure if API returns error', () => {
      const response = {
        error: 'error_type',
        errorMessage: 'Error message',
        status: 500,
      };
      removeGenerator.next({ userToRemove: { id: 'u1' } });
      removeGenerator.next();
      const putFailure = removeGenerator.next(response).value;
      removeGenerator.next(response);

      expect(putFailure).toEqual(put(remove.failure(response)));
    });

    it('Should call remove.failure if an exception occurs', () => {
      const response = new Error('Some error');
      removeGenerator.next({ userToRemove: { id: 'u1' } });
      const putFailure = removeGenerator.throw(response).value;

      expect(putFailure).toEqual(put(remove.failure(response)));
    });

    it('Should call requestMagicLink.success on successful API call', () => {
      const response = requestResponse;
      requestGenerator.next({ userToLogIn: { id: 'u1' } });
      requestGenerator.next();
      const putSuccess = requestGenerator.next(response).value;
      requestGenerator.next();

      expect(putSuccess).toEqual(put(requestMagicLink.success(response)));
    });

    it('Should call requestMagicLink.failure if API returns error', () => {
      const response = {
        error: 'error_type',
        errorMessage: 'Error message',
        status: 500,
      };
      requestGenerator.next({ userToLogIn: { id: 'u1' } });
      requestGenerator.next();
      const putFailure = requestGenerator.next(response).value;
      requestGenerator.next(response);

      expect(putFailure).toEqual(put(requestMagicLink.failure(response)));
    });

    it('Should call requestMagicLink.failure if an exception occurs', () => {
      const response = new Error('Some error');
      requestGenerator.next({ userToLogIn: { id: 'u1' } });
      const putFailure = requestGenerator.throw(response).value;

      expect(putFailure).toEqual(put(requestMagicLink.failure(response)));
    });
  });
});
