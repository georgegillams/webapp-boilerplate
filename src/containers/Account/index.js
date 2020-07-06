import { memo } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadShowcases } from './actions';
import { selectShowcasesState } from './selectors';
import Home from './Container';

const mapStateToProps = createStructuredSelector({
  showcasesState: selectShowcasesState(),
});

export function mapDispatchToProps(dispatch) {
  return { loadShowcases: () => dispatch(loadShowcases()) };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Home);
