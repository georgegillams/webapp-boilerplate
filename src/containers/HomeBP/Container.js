import React from 'react';
import PropTypes from 'prop-types';

import { KEY } from './constants';
import { useInjectReducer } from 'utils/redux/inject-reducer';
import { useInjectSaga } from 'utils/redux/inject-saga';

import Showcases from 'components/Showcases';

import saga from './saga';
import reducer from './reducer';

const Home = ({ loadShowcases, showcasesState, ...rest }) => {
  useInjectSaga({ key: KEY, saga });
  useInjectReducer({ key: KEY, reducer });

  return (
    <div {...rest}>
      <Showcases onGetShowcases={loadShowcases} data={showcasesState} />
    </div>
  );
};

Home.propTypes = {
  showcasesState: PropTypes.object,
  loadShowcases: PropTypes.func,
};

export default Home;
