import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PageTitle from 'components/PageTitle';
import { DebugObject } from 'gg-components/Auth';
import { Paragraph } from 'gg-components/Typography';

import { useInjectSaga } from 'utils/redux/inject-saga';
import { useInjectReducer } from 'utils/redux/inject-reducer';

import { KEY } from './constants';
import saga from './saga';
import reducer from './reducer';

const EmailVerification = props => {
  useInjectSaga({ key: KEY, saga });
  useInjectReducer({ key: KEY, reducer });

  const {
    verify,

    verificationState,
    authenticatorState,

    className,
  } = props;

  const { verifyError, verifyResult } = verificationState;

  useEffect(() => {
    const token = new URL(window.location).searchParams.get('token');
    const interval = setInterval(() => {
      if (token) {
        verify(token);
        clearInterval(interval);
      }
    }, 200);
  }, []);

  const success = verifyResult && !verifyError;

  const outerClassNames = [];

  if (className) {
    outerClassNames.push(className);
  }

  return (
    <div className={outerClassNames.join(' ')}>
      <PageTitle name={success ? 'Email confirmed' : 'Confirming email'}>
        {success && (
          <>
            <Paragraph>Thank you for confirming your email address</Paragraph>
          </>
        )}
        {verifyError && (
          <>
            <Paragraph>Something went wrong whilst confirming your email</Paragraph>
            {verifyError.errorMessage && (
              <>
                <br />
                <Paragraph>{verifyError.errorMessage}</Paragraph>
              </>
            )}
          </>
        )}
      </PageTitle>
      <DebugObject
        debugTitle="EmailVerification"
        debugObject={{
          verify,
          authenticatorState,
          verificationState,
        }}
      />
    </div>
  );
};

EmailVerification.propTypes = {
  verify: PropTypes.func.isRequired,
  verificationState: PropTypes.shape({
    token: PropTypes.string,
    verifying: PropTypes.bool,
    verifyError: PropTypes.object,
    verifyResult: PropTypes.object,
  }).isRequired,
  authenticatorState: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
  className: PropTypes.string,
};

EmailVerification.defaultProps = {
  verificationState: null,
  magicLoginState: null,
  className: null,
};

export default EmailVerification;
