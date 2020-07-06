import { memo } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { consent, deferConsent, resetConsent } from './actions';
import { selectState } from './selectors';
import Consent from './Container';

const mapStateToProps = createStructuredSelector({
  consentState: selectState(),
});

export function mapDispatchToProps(dispatch) {
  return {
    consent: payload => dispatch(consent(payload)),
    deferConsent: payload => dispatch(deferConsent(payload)),
    resetConsent: payload => dispatch(resetConsent(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Consent);
