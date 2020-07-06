import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DebugObject } from 'gg-components/DebugObject';
import {
  KEY,
  CONSENT_STATE_UNSET,
  CONSENT_STATE_ALLOWED_CLIENT_VALUE,
  CONSENT_STATE_DEFERRED_CLIENT_VALUE,
  CONSENT_STATE_DEFERRED,
} from './constants';
import saga from './saga';
import reducer from './reducer';
import { useInjectSaga } from 'utils/redux/inject-saga';
import { useInjectReducer } from 'utils/redux/inject-reducer';
import Button from 'components/Button';
import { Paragraph } from 'gg-components/Paragraph';
import Modal from 'react-modal';
import { cssModules } from 'gg-components/helpers/cssModules';
import STYLES from './consent.scss';
import { getPrivacyPreferences, setPrivacyPreferences } from 'utils/storageHelpers';

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

    ...rest
  } = props;

  useEffect(() => {
    if (!test) {
      Modal.setAppElement('#__next');
    }
    const privacyPreferences = getPrivacyPreferences();
    if (privacyPreferences === CONSENT_STATE_DEFERRED_CLIENT_VALUE) {
      deferConsent();
    } else if (privacyPreferences === CONSENT_STATE_ALLOWED_CLIENT_VALUE) {
      consent();
    } else {
      resetConsent();
    }
  }, []);

  let cookieConsentPopup = null;
  if (
    !consentState.consentSuppressed &&
    (consentState.cookieConsent === CONSENT_STATE_UNSET ||
      (consentState.cookieConsent === CONSENT_STATE_DEFERRED && consentState.cookieConsentReason))
  ) {
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
          {consentState.cookieConsentReason && (
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
              setPrivacyPreferences(CONSENT_STATE_ALLOWED_CLIENT_VALUE);
              consent();
            }}>
            Accept
          </Button>
          <Button
            className={getClassName('consent__button')}
            onClick={() => {
              deferConsent();
              setPrivacyPreferences(CONSENT_STATE_DEFERRED_CLIENT_VALUE);
            }}
            href={consentState.cookieConsentReason ? '/' : null}>
            {consentState.cookieConsentReason ? 'Dismiss and go to home page' : 'Dismiss'}
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <div {...rest}>
      <DebugObject
        debugTitle="Consent"
        debugObject={{
          consent,
          deferConsent,
          consentState,
        }}
      />
      {cookieConsentPopup && cookieConsentPopup}
    </div>
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
    consentSuppressed: PropTypes.bool,
  }).isRequired,
};

Consent.defaultProps = {
  test: false,
};

export default Consent;
