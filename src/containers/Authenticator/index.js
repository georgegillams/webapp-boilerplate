import { memo } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCookiesAllowed, loadAuth } from './actions';
import { selectState } from './selectors';
import Authenticator from './Container';

const mapStateToProps = createStructuredSelector({
  authenticatorState: selectState(),
});

export function mapDispatchToProps(dispatch) {
  return {
    setCookiesAllowed: payload => dispatch(setCookiesAllowed(payload)),
    loadAuth: payload => dispatch(loadAuth(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Authenticator);
