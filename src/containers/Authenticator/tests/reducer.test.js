import authenticatorReducer from '../reducer';
import { loadAuth, setCookiesAllowed } from '../actions';

describe('authenticatorReducer', () => {
  let state;

  const authenticator = {
    cookiesAllowed: false,
    loadingAuth: false,
    loadAuthError: null,
    user: null,
  };

  beforeEach(() => {
    state = {
      ...authenticator,
    };
  });

  it('should return the initial state', () => {
    expect(authenticatorReducer(undefined, {})).toEqual(state);
  });

  describe('loadAuthenticator actions', () => {
    it('should handle the action setCookiesAllowed.TRIGGER correctly', () => {
      const expectResult = {
        ...state,
        cookiesAllowed: true,
      };

      expect(authenticatorReducer(state, setCookiesAllowed.trigger(true))).toEqual(expectResult);
    });

    it('should handle the action loadAuth.REQUEST correctly', () => {
      const expectResult = {
        ...state,
        loadingAuth: true,
      };

      expect(authenticatorReducer(state, loadAuth.request())).toEqual(expectResult);
    });

    it('should return the action loadAuth.SUCCESS correctly', () => {
      const expectResult = {
        ...state,
        user: { name: 'userName' },
      };

      expect(authenticatorReducer(state, loadAuth.success({ user: { name: 'userName' } }))).toEqual(expectResult);
    });

    it('should return the action loadAuth.FAILURE', () => {
      const expectResult = {
        ...state,
        loadAuthError: 'some error',
      };

      expect(authenticatorReducer(state, loadAuth.failure('some error'))).toEqual(expectResult);
    });
  });
});
