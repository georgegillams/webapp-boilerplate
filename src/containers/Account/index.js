import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';

import Showcases from 'components/Showcases';

import saga from './saga';
import reducer from './reducer';
import { getShowcases } from './actions';
import { selectShowcases } from './selectors';

export function Home({ getShowcases, showcasesData, ...rest }) {
  useInjectSaga({ key: 'showcases', saga });
  useInjectReducer({ key: 'showcases', reducer });

  delete rest.namespacesRequired;

  return (
    <div {...rest}>
      <Showcases onGetShowcases={getShowcases} data={showcasesData} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  showcasesData: selectShowcases(),
});

export function mapDispatchToProps(dispatch) {
  return { getShowcases: () => dispatch(getShowcases()) };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

Home.propTypes = {
  showcasesData: PropTypes.object,
  getShowcases: PropTypes.func,
};

export default compose(withConnect, memo)(Home);
