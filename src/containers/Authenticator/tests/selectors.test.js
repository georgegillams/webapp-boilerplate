import { selectState, selectDomain } from '../selectors';

describe('selectShowcases', () => {
  it('should select the initialState state', () => {
    const initialState = {
      cookiesAllowed: false,
      loadingAuth: false,
      loadAuthError: null,
      user: undefined,
    };

    const mockedState = {};

    expect(selectDomain(mockedState)).toEqual(initialState);
  });

  it('should select the showcases state', () => {
    const initialShowcasesState = {
      cookiesAllowed: true,
      loadingAuth: false,
      loadAuthError: null,
      user: { name: 'userName' },
    };

    const mockedState = {
      authenticator: initialShowcasesState,
    };

    const selectShowcasesMock = selectState();

    expect(selectShowcasesMock(mockedState)).toEqual(initialShowcasesState);
  });
});
