import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cookie from 'react-cookies';
import { DebugObject } from 'gg-components/Auth';
import {
  KEY,
  CONSENT_STATE_UNSET,
  CONSENT_STATE_REQUIRED,
  CONSENT_STATE_ALLOWED_CLIENT_KEY,
  CONSENT_STATE_DEFERRED_CLIENT_KEY,
} from './constants';
import saga from './saga';
import reducer from './reducer';
import { useInjectSaga } from 'utils/redux/inject-saga';
import { useInjectReducer } from 'utils/redux/inject-reducer';
import Button from 'components/Button';
import { Paragraph } from 'gg-components/Typography';

const Consent = props => {
  useInjectSaga({ key: KEY, saga });
  useInjectReducer({ key: KEY, reducer });

  const {
    consent,
    deferConsent,
    resetConsent,

    consentState,

    className,
  } = props;

  useEffect(() => {
    const sessionCookie = cookie.load('session');
    if (sessionCookie) {
      if (sessionCookie === CONSENT_STATE_DEFERRED_CLIENT_KEY) {
        deferConsent();
      } else {
        consent();
      }
    } else {
      resetConsent();
    }
  }, []);

  const outerClassNames = [];

  if (className) {
    outerClassNames.push(className);
  }

  let cookieConsentPopup = null;
  if (consentState.cookieConsent === CONSENT_STATE_UNSET || consentState.cookieConsent === CONSENT_STATE_REQUIRED) {
    cookieConsentPopup = (
      <div>
        <Paragraph>
          Please let us use cookies
          {consentState.cookieConsent === CONSENT_STATE_REQUIRED && consentState.cookieConsentReason
            ? `They are required to ${consentState.cookieConsentReason}`
            : ''}
        </Paragraph>
        <br />
        <Button
          onClick={() => {
            cookie.save('session', CONSENT_STATE_ALLOWED_CLIENT_KEY);
            consent();
          }}>
          YASS
        </Button>
        <br />
        <Button
          onClick={() => {
            deferConsent();
            cookie.save('session', CONSENT_STATE_DEFERRED_CLIENT_KEY);
          }}
          href={consentState.cookieConsent === CONSENT_STATE_REQUIRED ? '/' : null}>
          {consentState.cookieConsent === CONSENT_STATE_REQUIRED ? 'Dismiss and return home' : 'Dismiss'}
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className={outerClassNames.join(' ')}>
        <DebugObject
          debugTitle="Consent"
          debugObject={{
            consent,
            deferConsent,
            consentState,
            className,
          }}
        />
      </div>
      {cookieConsentPopup && cookieConsentPopup}
    </>
  );
};

Consent.propTypes = {
  consent: PropTypes.func.isRequired,
  deferConsent: PropTypes.func.isRequired,
  resetConsent: PropTypes.func.isRequired,
  consentState: PropTypes.shape({
    cookieConsent: PropTypes.string,
    cookieConsentReason: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

Consent.defaultProps = {
  className: null,
};

export default Consent;
