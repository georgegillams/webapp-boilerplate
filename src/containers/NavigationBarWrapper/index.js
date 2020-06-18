import { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Container from './Container';

// import appSelectors from 'containers/App/selectors';
import { mapSelectors } from 'utils/redux-definitions/selectors';

const mapDispatchToProps = () => ({});

// const mapStateToProps = createStructuredSelector(mapSelectors(appSelectors));
const mapStateToProps = createStructuredSelector(mapSelectors([]));

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Container);
