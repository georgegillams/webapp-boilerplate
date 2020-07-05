import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DebugObject } from 'components/DebugObject';
import { KEY } from './constants';
import saga from './saga';
import reducer from './reducer';
import { useInjectSaga } from 'utils/redux/inject-saga';
import { useInjectReducer } from 'utils/redux/inject-reducer';

const Authenticator = props => {
  useInjectSaga({ key: KEY, saga });
  useInjectReducer({ key: KEY, reducer });

  useEffect(() => {
    props.loadAuth();
  }, []);

  const {
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
          loadAuth,
          authenticatorState,
          className,
        }}
      />
    </div>
  );
};

Authenticator.propTypes = {
  loadAuth: PropTypes.func.isRequired,
  authenticatorState: PropTypes.shape({
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
