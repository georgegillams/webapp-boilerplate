import { memo } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectState as selectConsentState } from '../Consent/selectors';

import CookiesRequired from './Container';
import { rePromptConsent } from 'containers/Consent/actions';

const mapStateToProps = createStructuredSelector({
  consentState: selectConsentState(),
});

export function mapDispatchToProps(dispatch) {
  return {
    rePromptConsent: payload => dispatch(rePromptConsent(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CookiesRequired);
