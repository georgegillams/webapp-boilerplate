import { memo } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { logout, requestVerificationEmail } from './actions';
import { selectState } from './selectors';
import { selectState as selectAuthenticatorState } from '../Authenticator/selectors';
import Account from './Container';

const mapStateToProps = createStructuredSelector({
  accountState: selectState(),
  authenticatorState: selectAuthenticatorState(),
});

export function mapDispatchToProps(dispatch) {
  return {
    logout: payload => dispatch(logout(payload)),
    requestVerificationEmail: payload => dispatch(requestVerificationEmail(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Account);
