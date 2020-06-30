import consentReducer from '../reducer';
import { consent, resetConsent, deferConsent, rePromptConsent } from '../actions';
import { initialState } from '../reducer';

describe('consentReducer', () => {
  let state;

  beforeEach(() => {
    state = {
      ...initialState,
    };
  });

  it('should return the initial state', () => {
    expect(consentReducer(undefined, {})).toEqual(state);
  });

  describe('loadAuthenticator actions', () => {
    it('should handle the action consent.TRIGGER correctly', () => {
      const expectResult = {
        ...state,
        cookieConsent: 'CONSENT_STATE_ALLOWED',
      };

      expect(consentReducer(state, consent.trigger())).toEqual(expectResult);
    });

    it('should handle the action resetConsent.TRIGGER correctly', () => {
      const expectResult = {
        ...state,
        cookieConsent: 'CONSENT_STATE_UNSET',
      };

      expect(consentReducer(state, resetConsent.trigger())).toEqual(expectResult);
    });

    it('should handle the action deferConsent.TRIGGER correctly', () => {
      const expectResult = {
        ...state,
        cookieConsent: 'CONSENT_STATE_DEFERRED',
      };

      expect(consentReducer(state, deferConsent.trigger())).toEqual(expectResult);
    });

    it('should handle the action rePromptConsent.TRIGGER correctly', () => {
      const expectResult = {
        ...state,
        cookieConsent: 'CONSENT_STATE_REQUIRED',
        cookieConsentReason: 'log in',
      };

      expect(consentReducer(state, rePromptConsent.trigger('log in'))).toEqual(expectResult);
    });
  });
});
