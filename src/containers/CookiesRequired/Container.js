import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DebugObject } from 'gg-components/Auth';
import { CONSENT_STATE_DEFERRED, CONSENT_STATE_UNSET } from 'containers/Consent/constants';

const CookiesRequired = props => {
  const { consentState, rePromptConsent } = props;
  const { cookieConsent } = consentState;
  const { reason } = props;

  const [rePrompted, setRePrompted] = useState(false);

  useEffect(() => {
    if ((!rePrompted && cookieConsent === CONSENT_STATE_DEFERRED) || cookieConsent === CONSENT_STATE_UNSET) {
      setRePrompted(true);
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
