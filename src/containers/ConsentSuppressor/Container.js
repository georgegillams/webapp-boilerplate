import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DebugObject } from 'gg-components/Auth';

const ConsentSuppressor = props => {
  const { consentState, setConsentSuppression } = props;
  const { cookieConsent } = consentState;

  useEffect(() => {
    setConsentSuppression(true);

    const cleanUp = () => {
      setConsentSuppression(false);
    };
    return cleanUp;
  }, [cookieConsent]);

  return (
    <DebugObject
      debugTitle="ConsentSuppressor"
      debugObject={{
        setConsentSuppression,
        consentState,
      }}
    />
  );
};

ConsentSuppressor.propTypes = {
  setConsentSuppression: PropTypes.func.isRequired,
  consentState: PropTypes.shape({
    cookieConsent: PropTypes.string,
  }).isRequired,
};

export default ConsentSuppressor;
