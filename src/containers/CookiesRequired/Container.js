import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DebugObject } from 'gg-components/Auth';
import { CONSENT_STATE_DEFERRED, CONSENT_STATE_UNSET } from 'containers/Consent/constants';

const CookiesRequired = props => {
  const { consentState, rePromptConsent } = props;
  const { cookieConsent } = consentState;
  const { reason } = props;

  useEffect(() => {
    if (cookieConsent === CONSENT_STATE_DEFERRED || cookieConsent === CONSENT_STATE_UNSET) {
      rePromptConsent(reason);
    }
  }, [cookieConsent]);

  return (
    <DebugObject
      debugTitle="CookiesRequired"
      debugObject={{
        rePromptConsent,
        consentState,
      }}
    />
  );
};

CookiesRequired.propTypes = {
  reason: PropTypes.string.isRequired,
  rePromptConsent: PropTypes.func.isRequired,
  consentState: PropTypes.shape({
    cookieConsent: PropTypes.string,
  }).isRequired,
};

export default CookiesRequired;
