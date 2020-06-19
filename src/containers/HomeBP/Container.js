import React from 'react';
import PropTypes from 'prop-types';

import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';

import Showcases from 'components/Showcases';

import saga from './saga';
import reducer from './reducer';

const Home = ({ getShowcases, showcasesData, ...rest }) => {
  useInjectSaga({ key: 'showcases', saga });
  useInjectReducer({ key: 'showcases', reducer });

  return (
    <div {...rest}>
      <Showcases onGetShowcases={getShowcases} data={showcasesData} />
    </div>
  );
};

Home.propTypes = {
  showcasesData: PropTypes.object,
  getShowcases: PropTypes.func,
};

export default Home;
