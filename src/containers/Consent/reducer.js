import produce from 'immer';

import { consent, deferConsent, rePromptConsent, resetConsent } from './actions';
import {
  CONSENT_STATE_UNSET,
  CONSENT_STATE_ALLOWED,
  CONSENT_STATE_DEFERRED,
  CONSENT_STATE_REQUIRED,
} from './constants';

export const initialState = {
  cookieConsent: null,
  cookieConsentReason: null,
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case resetConsent.TRIGGER:
        draft.cookieConsent = CONSENT_STATE_UNSET;
        draft.cookieConsentReason = null;
        break;

      case consent.TRIGGER:
        draft.cookieConsent = CONSENT_STATE_ALLOWED;
        draft.cookieConsentReason = null;
        break;

      case deferConsent.TRIGGER:
        draft.cookieConsent = CONSENT_STATE_DEFERRED;
        draft.cookieConsentReason = null;
        break;

      case rePromptConsent.TRIGGER:
        draft.cookieConsent = CONSENT_STATE_REQUIRED;
        draft.cookieConsentReason = payload;
        break;
    }
  });

export default reducer;
