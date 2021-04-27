import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextLink from 'gg-webapp/components/TextLink';
import PageTitle from 'gg-webapp/components/PageTitle';
import { DebugObject } from 'gg-webapp/components/DebugObject';
import { LoadingCover } from 'gg-components/LoadingCover';

import Skeleton from './Skeleton';

import CookiesRequired from 'containers/common/CookiesRequired';
import { LoggedOutOnly } from 'gg-webapp/components/Walls';
import { LoginForm } from 'gg-webapp/components/Forms';
import STYLES from './login.scss';
import { cssModules } from 'gg-components/helpers/cssModules';

const getClassName = cssModules(STYLES);

const Login = props => {
  const [credentials, setCredentials] = useState({});

  const {
    login,

    loginState,
    authenticatorState,

    className,
  } = props;
  const outerClassNames = [];

  if (className) {
    outerClassNames.push(className);
  }
  let preSubmitText = null;
  if (loginState.loginResult && loginState.loginResult.success) {
    preSubmitText = loginState.loginResult.success;
  }
  if (loginState.loginError && loginState.loginError.errorMessage) {
    preSubmitText = loginState.loginError.errorMessage;
  }

  const page = (
    <div className={outerClassNames.join(' ')}>
      <CookiesRequired reason={'log in'} />
      <LoggedOutOnly user={authenticatorState.user}>
        <PageTitle name="Login">
          <LoginForm
            className={getClassName('login__form')}
            loading={loginState.loggingIn}
            credentials={credentials}
            onDataChanged={setCredentials}
            onSubmit={() => {
              login(credentials);
            }}
            preSubmitText={preSubmitText}
          />
          <TextLink className={getClassName('login__link')} href="/sign-up">
            Not yet got an account? Sign up here.
          </TextLink>
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
