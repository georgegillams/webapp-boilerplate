import { memo } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { signUp } from './actions';
import { selectState } from './selectors';
import { selectState as selectAuthenticatorState } from '../Authenticator/selectors';
import SignUp from './Container';

const mapStateToProps = createStructuredSelector({
  signUpState: selectState(),
  authenticatorState: selectAuthenticatorState(),
});

export function mapDispatchToProps(dispatch) {
  return {
    signUp: payload => dispatch(signUp(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SignUp);
