import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextLink from 'components/TextLink';
import PageTitle from 'components/PageTitle';
import { DebugObject, LoadingCover } from 'gg-components/Auth';

import Skeleton from './Skeleton';

import { LoggedOutOnly } from 'components/Walls';
import { LoginForm } from 'components/Forms';
import { useInjectSaga } from 'utils/redux/inject-saga';
import { useInjectReducer } from 'utils/redux/inject-reducer';

import { KEY } from './constants';
import saga from './saga';
import reducer from './reducer';

const Login = props => {
  useInjectSaga({ key: KEY, saga });
  useInjectReducer({ key: KEY, reducer });

  const [credentials, setCredentials] = useState({});

  const {
    login,

    loginState,
    authenticatorState,

    className,
  } = props;
  const outerClassNameFinal = [];

  if (className) {
    outerClassNameFinal.push(className);
  }
  let preSubmitText = null;
  if (loginState.loginResult && loginState.loginResult.success) {
    preSubmitText = loginState.loginResult.success;
  }
  if (loginState.loginError && loginState.loginError.errorMessage) {
    preSubmitText = loginState.loginError.errorMessage;
  }

  const page = (
    <div className={outerClassNameFinal.join(' ')}>
      <LoggedOutOnly user={authenticatorState.user}>
        <PageTitle name="Login">
          <LoginForm
            disabled={loginState.loggingIn}
            credentials={credentials}
            onDataChanged={setCredentials}
            onSubmit={() => {
              login(credentials);
            }}
            preSubmitText={preSubmitText}
          />
          <br />
          <TextLink href="/sign-up">Not yet got an account? Sign up here.</TextLink>
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
        debugTitle="Login"
        debugObject={{
          login,
          authenticatorState,
          loginState,
        }}
      />
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  loginState: PropTypes.shape({
    loggingIn: PropTypes.bool,
    loginError: PropTypes.object,
    loginResult: PropTypes.object,
  }).isRequired,
  authenticatorState: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
  className: PropTypes.string,
};

Login.defaultProps = {
  authenticatorState: null,
  loginState: null,
  className: null,
};

export default Login;
