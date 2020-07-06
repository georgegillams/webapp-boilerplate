import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cookie from 'react-cookies';
import { DebugObject } from 'gg-components/Auth';
import { KEY } from './constants';
import saga from './saga';
import reducer from './reducer';
import { useInjectSaga } from 'utils/redux/inject-saga';
import { useInjectReducer } from 'utils/redux/inject-reducer';

const Authenticator = props => {
  useInjectSaga({ key: KEY, saga });
  useInjectReducer({ key: KEY, reducer });

  useEffect(() => {
    const sessionCookie = cookie.load('session');
    if (sessionCookie) {
      props.setCookiesAllowed(true);
    }
    props.loadAuth();
  }, []);

  const {
    setCookiesAllowed,
    loadAuth,

    authenticatorState,

    className,
  } = props;

  const outerClassNames = [];

  if (className) {
    outerClassNames.push(className);
  }

  return (
    <div className={outerClassNames.join(' ')}>
      <DebugObject
        debugTitle="Authenticator"
        debugObject={{
          setCookiesAllowed,
          loadAuth,
          authenticatorState,
          className,
        }}
      />
    </div>
  );
};

Authenticator.propTypes = {
  setCookiesAllowed: PropTypes.func.isRequired,
  loadAuth: PropTypes.func.isRequired,
  authenticatorState: PropTypes.shape({
    cookiesAllowed: PropTypes.bool,
    loadingAuth: PropTypes.bool,
    loadAuthError: PropTypes.object,
    user: PropTypes.object,
  }).isRequired,
  className: PropTypes.string,
};

Authenticator.defaultProps = {
  className: null,
};

export default Authenticator;
