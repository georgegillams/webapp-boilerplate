import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from 'components/PageTitle';
import { DebugObject, LoadingCover } from 'gg-components/Auth';
import { Paragraph } from 'gg-components/Typography';
import { Button } from 'gg-components/Button';

import Skeleton from './Skeleton';

import { LoggedInOnly } from 'components/Walls';
import { useInjectSaga } from 'utils/redux/inject-saga';
import { useInjectReducer } from 'utils/redux/inject-reducer';

import { KEY } from './constants';
import saga from './saga';
import reducer from './reducer';

const Account = props => {
  useInjectSaga({ key: KEY, saga });
  useInjectReducer({ key: KEY, reducer });

  const {
    logout,
    requestVerificationEmail,

    accountState,
    authenticatorState,

    className,
  } = props;
  const { user } = authenticatorState;

  const outerClassNameFinal = [];

  if (className) {
    outerClassNameFinal.push(className);
  }

  const page = (
    <div className={outerClassNameFinal.join(' ')}>
      <LoggedInOnly user={authenticatorState.user}>
        <PageTitle name="Account">
          <Paragraph>
            {user && user.email && <div>{`Email: ${user.email}`}</div>}
            {user && user.uname && <div>{`Display name: ${user.uname}`}</div>}
            <br />
          </Paragraph>
          {user && !user.emailVerified && (
            <>
              <Button
                large
                disabled={accountState && accountState.requestingVerificationEmail}
                onClick={requestVerificationEmail}>
                Get a new verification email
              </Button>
              <br />
              <br />
            </>
          )}
          {user && user.admin && (
            <>
              <Button large href="/admin">
                Admin
              </Button>
              <br />
              <br />
              <Button large href="/status">
                Site status
              </Button>
              <br />
              <br />
            </>
          )}
          <Button large disabled={accountState && accountState.loggingOut} onClick={logout}>
            Logout
          </Button>
        </PageTitle>
      </LoggedInOnly>
    </div>
  );

  return (
    <>
      <LoadingCover loadingSkeleton={Skeleton} loading={authenticatorState.user === undefined} error={false}>
        {page}
      </LoadingCover>
      <DebugObject
        debugTitle="Account"
        debugObject={{
          logout,
          authenticatorState,
          accountState,
        }}
      />
    </>
  );
};

Account.propTypes = {
  logout: PropTypes.func.isRequired,
  requestVerificationEmail: PropTypes.func.isRequired,
  accountState: PropTypes.shape({
    loggingOut: PropTypes.bool,
    logOutError: PropTypes.object,
    logOutResult: PropTypes.object,
    requestingVerificationEmail: PropTypes.bool,
    requestVerificationEmailError: PropTypes.object,
    requestVerificationEmailResult: PropTypes.object,
  }).isRequired,
  authenticatorState: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
  className: PropTypes.string,
};

Account.defaultProps = {
  authenticatorState: null,
  logoutState: null,
  className: null,
};

export default Account;
