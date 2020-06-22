import { memo } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectState as selectAuthenticatorState } from '../../Authenticator/selectors';
import AdminNavigation from './Container';

const mapStateToProps = createStructuredSelector({
  authenticatorState: selectAuthenticatorState(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, memo)(AdminNavigation);
