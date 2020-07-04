import { memo } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { sendAnalytic } from './actions';
import { selectState as selectConsentState } from '../Consent/selectors';
import { selectState } from './selectors';
import Authenticator from './Container';

const mapStateToProps = createStructuredSelector({
  consentState: selectConsentState(),
  analyticState: selectState(),
});

export function mapDispatchToProps(dispatch) {
  return {
    sendAnalytic: payload => dispatch(sendAnalytic(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Authenticator);
