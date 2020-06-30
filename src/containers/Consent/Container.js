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
import Modal from 'react-modal';
import { cssModules } from 'gg-components/helpers/cssModules';
import STYLES from './consent.scss';

const getClassName = cssModules(STYLES);

const Consent = props => {
  useInjectSaga({ key: KEY, saga });
  useInjectReducer({ key: KEY, reducer });

  const {
    test,

    consent,
    deferConsent,
    resetConsent,

    consentState,

    className,
  } = props;

  useEffect(() => {
    if (!test) {
      Modal.setAppElement('#__next');
    }
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
      <Modal
        isOpen
        ariaHideApp
        overlayClassName={getClassName('consent__modal-overlay')}
        className={getClassName('consent__modal-content')}>
        <Paragraph>
          This site uses cookies to manage account sessions.
          <br />
          It also stores the URLs you access within the site.
          <br />
          No other data is collected or stored by the site or any third-parties.
          {consentState.cookieConsent === CONSENT_STATE_REQUIRED && consentState.cookieConsentReason && (
            <>
              <br />
              You must accept usage of cookies and data to {consentState.cookieConsentReason}
            </>
          )}
        </Paragraph>
        <br />
        <div>
          <Button
            className={getClassName('consent__button')}
            onClick={() => {
              cookie.save('session', CONSENT_STATE_ALLOWED_CLIENT_KEY);
              consent();
            }}>
            Accept
          </Button>
          <Button
            className={getClassName('consent__button')}
            onClick={() => {
              deferConsent();
              cookie.save('session', CONSENT_STATE_DEFERRED_CLIENT_KEY);
            }}
            href={consentState.cookieConsent === CONSENT_STATE_REQUIRED ? '/' : null}>
            {consentState.cookieConsent === CONSENT_STATE_REQUIRED ? 'Dismiss and go to home page' : 'Dismiss'}
          </Button>
        </div>
      </Modal>
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
  test: PropTypes.bool,
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
  test: false,
  className: null,
};

export default Consent;