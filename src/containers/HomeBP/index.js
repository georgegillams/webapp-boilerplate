import { memo } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadShowcases } from './actions';
import { selectState } from './selectors';
import Home from './Container';

const mapStateToProps = createStructuredSelector({
  showcasesState: selectState(),
});

export function mapDispatchToProps(dispatch) {
  return { loadShowcases: payload => dispatch(loadShowcases(payload)) };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Home);
