import { memo } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { load, remove, requestMagicLink, create, update } from './actions';
import { selectState } from './selectors';
import { selectState as selectAuthenticatorState } from '../../Authenticator/selectors';
import AdminUsers from './Container';

const mapStateToProps = createStructuredSelector({
  adminUsersState: selectState(),
  authenticatorState: selectAuthenticatorState(),
});

export function mapDispatchToProps(dispatch) {
  return {
    load: payload => dispatch(load(payload)),
    remove: payload => dispatch(remove(payload)),
    requestMagicLink: payload => dispatch(requestMagicLink(payload)),
    create: payload => dispatch(create(payload)),
    update: payload => dispatch(update(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(AdminUsers);
