import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PageTitle from 'components/PageTitle';
import { DebugObject } from 'gg-components/Auth';
import { Paragraph } from 'gg-components/Typography';

import { useInjectSaga } from 'utils/redux/inject-saga';
import { useInjectReducer } from 'utils/redux/inject-reducer';
import TextLink from 'components/TextLink';
import { useRouter } from 'next/router';

import { KEY } from './constants';
import saga from './saga';
import reducer from './reducer';
import { REDIRECT_REGEX } from 'helpers/regexConstants';

const MagicLogin = props => {
  useInjectSaga({ key: KEY, saga });
  useInjectReducer({ key: KEY, reducer });

  const router = useRouter();

  const {
    login,

    magicLoginState,
    authenticatorState,

    className,
  } = props;

  const { logInError, logInResult } = magicLoginState;

  useEffect(() => {
    const token = new URL(window.location).searchParams.get('token');
    const interval = setInterval(() => {
      if (token) {
        login(token);
        clearInterval(interval);
      }
    }, 200);
  }, []);

  const { user } = authenticatorState;

  const success = user && logInResult && !logInError;

  const outerClassNames = [];

  if (className) {
    outerClassNames.push(className);
  }

  let redirectLocation = null;
  if (success) {
    redirectLocation = new URL(window.location).searchParams.get('redirect');
    if (!redirectLocation || redirectLocation === '' || !redirectLocation.match(REDIRECT_REGEX)) {
      redirectLocation = 'account';
      setTimeout(() => {
        router.push(`/${redirectLocation}`);
      }, 1000);
    }
  }

  return (
    <div className={outerClassNames.join(' ')}>
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
  className: PropTypes.string,
};

MagicLogin.defaultProps = {
  authenticatorState: null,
  magicLoginState: null,
  className: null,
};

export default MagicLogin;
