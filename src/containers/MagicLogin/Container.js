import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PageTitle from 'components/PageTitle';
import { DebugObject } from 'gg-components/Auth';
import { Paragraph } from 'gg-components/Typography';

import { useInjectSaga } from 'utils/redux/inject-saga';
import { useInjectReducer } from 'utils/redux/inject-reducer';
import TextLink from 'components/TextLink';
import CookiesRequired from 'containers/CookiesRequired';
import { withRouter } from 'next/router';

import { KEY } from './constants';
import saga from './saga';
import reducer from './reducer';
import { REDIRECT_REGEX } from 'helpers/regexConstants';
import { CONSENT_STATE_ALLOWED } from 'containers/Consent/constants';

const MagicLogin = props => {
  useInjectSaga({ key: KEY, saga });
  useInjectReducer({ key: KEY, reducer });

  const {
    router,

    login,

    consentState,
    magicLoginState,
    authenticatorState,

    className,
  } = props;

  const { logInError, logInResult } = magicLoginState;

  useEffect(() => {
    let token = null;
    if (router && router.query) {
      token = router.query.token;
    }
    // We want to wait for cookies to be accepted before logging in
    if (token && consentState.cookieConsent === CONSENT_STATE_ALLOWED) {
      login(token);
    }
  }, [consentState, router]);

  const { user } = authenticatorState;

  const success = user && logInResult && !logInError;

  const outerClassNames = [];

  if (className) {
    outerClassNames.push(className);
  }

  let redirectLocation = 'account';
  if (success) {
    if (router && router.query) {
      redirectLocation = router.query.redirect;
    }
    if (!redirectLocation || redirectLocation === '' || !redirectLocation.match(REDIRECT_REGEX)) {
      redirectLocation = 'account';
      setTimeout(() => {
        router.push(`/${redirectLocation}`);
      }, 1000);
    }
  }

  return (
    <div className={outerClassNames.join(' ')}>
      <CookiesRequired reason={'log in'} />
      <PageTitle name={success ? 'Logged in' : 'Logging in'}>
        {success && (
          <>
            <Paragraph>Logged in!</Paragraph>
            <br />
            <Paragraph>You will now be redirected to the {redirectLocation} page</Paragraph>
            <br />
            <TextLink href={redirectLocation}>Not been redirected? Click here</TextLink>
          </>
        )}
        {logInError && (
          <>
            <Paragraph>Something went wrong logging you in</Paragraph>
            {logInError.errorMessage && (
              <>
                <br />
                <Paragraph>{logInError.errorMessage}</Paragraph>
              </>
            )}
            <br />
            <TextLink href={'/login'}>Try logging in again</TextLink>
          </>
        )}
      </PageTitle>
      <DebugObject
        debugTitle="MagicLogin"
        debugObject={{
          login,
          authenticatorState,
          magicLoginState,
        }}
      />
    </div>
  );
};

MagicLogin.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func,
    query: PropTypes.shape({
      token: PropTypes.string,
      redirect: PropTypes.string,
    }).isRequired,
  }),
  login: PropTypes.func.isRequired,
  magicLoginState: PropTypes.shape({
    token: PropTypes.string,
    loggingIn: PropTypes.bool,
    logInError: PropTypes.object,
    logInResult: PropTypes.object,
  }).isRequired,
  authenticatorState: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
  consentState: PropTypes.shape({
    cookieConsent: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

MagicLogin.defaultProps = {
  router: null,
  authenticatorState: null,
  magicLoginState: null,
  className: null,
};

export default withRouter(MagicLogin);
