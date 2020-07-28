import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextLink from 'components/common/TextLink';
import PageTitle from 'components/common/PageTitle';
import { DebugObject } from 'components/common/DebugObject';
import { LoadingCover } from 'gg-components/LoadingCover';

import Skeleton from './Skeleton';

import { LoggedOutOnly } from 'components/common/Walls';
import { SignUpForm } from 'components/common/Forms';
import CookiesRequired from 'containers/CookiesRequired';
import { CONSENT_STATE_ALLOWED } from 'containers/Consent/constants';

const SignUp = props => {
  const [credentials, setCredentials] = useState({});

  const {
    signUp,

    consentState,
    signUpState,
    authenticatorState,

    className,
  } = props;
  const outerClassNames = [];

  if (className) {
    outerClassNames.push(className);
  }
  let preSubmitText = null;
  if (signUpState.signUpResult && signUpState.signUpResult.success) {
    preSubmitText = signUpState.signUpResult.success;
  }
  if (signUpState.signUpError && signUpState.signUpError.errorMessage) {
    preSubmitText = signUpState.signUpError.errorMessage;
  }

  // We shouldn't allow a user to sign up unless cookies are consented to
  const page = (
    <div className={outerClassNames.join(' ')}>
      <CookiesRequired reason={'sign up'} />
      <LoggedOutOnly user={authenticatorState.user}>
        <PageTitle name="Sign up">
          <SignUpForm
            disabled={signUpState.signingUp || consentState.cookieConsent !== CONSENT_STATE_ALLOWED}
            credentials={credentials}
            onDataChanged={setCredentials}
            onSubmit={() => {
              if (consentState.cookieConsent === CONSENT_STATE_ALLOWED) {
                signUp(credentials);
              }
            }}
            preSubmitText={preSubmitText}
          />
          <br />
          <TextLink href="/login">Already got an account? Login here.</TextLink>
        </PageTitle>
      </LoggedOutOnly>
    </div>
  );

  return (
    <>
      <LoadingCover loadingSkeleton={Skeleton} loading={authenticatorState.user === undefined} error={false}>
        {page}
      </LoadingCover>
      <DebugObject
        debugTitle="SignUp"
        debugObject={{
          signUp,
          authenticatorState,
          signUpState,
        }}
      />
    </>
  );
};

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  signUpState: PropTypes.shape({
    signingUp: PropTypes.bool,
    signUpError: PropTypes.object,
    signUpResult: PropTypes.object,
  }).isRequired,
  authenticatorState: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
  consentState: PropTypes.shape({
    cookieConsent: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

SignUp.defaultProps = {
  authenticatorState: null,
  signUpState: null,
  className: null,
};

export default SignUp;
