import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextLink from 'components/common/TextLink';
import PageTitle from 'components/common/PageTitle';
import DebugObject from 'components/common/DebugObject';
import LoadingCover from '@george-gillams/components/loading-cover';

import Skeleton from './Skeleton';

import CookiesRequired from 'containers/common/CookiesRequired';
import { LoggedOutOnly } from 'components/common/Walls';
import { LoginForm } from 'components/common/Forms';
import STYLES from './login.scss';
import PageContainer from 'components/common/PageContainer';
import { cssModules } from '@george-gillams/components/helpers/cssModules';

const getClassName = cssModules(STYLES);

const Login = props => {
  const [credentials, setCredentials] = useState({});

  const {
    login,

    loginState,
    authenticatorState,
  } = props;

  let preSubmitText = null;
  if (loginState.loginResult && loginState.loginResult.success) {
    preSubmitText = loginState.loginResult.success;
  }
  if (loginState.loginError && loginState.loginError.errorMessage) {
    preSubmitText = loginState.loginError.errorMessage;
  }

  const page = (
    <PageContainer bottomPadding>
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
    </PageContainer>
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
};

Login.defaultProps = {
  authenticatorState: null,
  loginState: null,
};

export default Login;
