import produce from 'immer';

import { consent, deferConsent, setConsentReason, resetConsent, setConsentSuppression } from './actions';
import { CONSENT_STATE_UNSET, CONSENT_STATE_ALLOWED, CONSENT_STATE_DEFERRED } from './constants';

export const initialState = {
  cookieConsent: null,
  cookieConsentReason: null,
  consentSuppressed: false,
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case resetConsent.TRIGGER:
        draft.cookieConsent = CONSENT_STATE_UNSET;
        break;

      case consent.TRIGGER:
        draft.cookieConsent = CONSENT_STATE_ALLOWED;
        break;

      case deferConsent.TRIGGER:
        draft.cookieConsent = CONSENT_STATE_DEFERRED;
        break;

      case setConsentReason.TRIGGER:
        draft.cookieConsentReason = payload;
        break;

      case setConsentSuppression.TRIGGER:
        draft.consentSuppressed = payload;
        break;
    }
  });

export default reducer;
