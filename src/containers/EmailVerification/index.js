import { memo } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { verify } from './actions';
import { selectState } from './selectors';
import { selectState as selectAuthenticatorState } from '../Authenticator/selectors';
import EmailVerification from './Container';

const mapStateToProps = createStructuredSelector({
  verificationState: selectState(),
  authenticatorState: selectAuthenticatorState(),
});

export function mapDispatchToProps(dispatch) {
  return {
    verify: payload => dispatch(verify(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(EmailVerification);
