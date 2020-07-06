import { memo } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from './Container';

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch) {
  return {};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Home);
