import { memo } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { login } from './actions';
import { selectState } from './selectors';
import { selectState as selectAuthenticatorState } from '../Authenticator/selectors';
import MagicLogin from './Container';

const mapStateToProps = createStructuredSelector({
  magicLoginState: selectState(),
  authenticatorState: selectAuthenticatorState(),
});

export function mapDispatchToProps(dispatch) {
  return {
    login: payload => dispatch(login(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(MagicLogin);
