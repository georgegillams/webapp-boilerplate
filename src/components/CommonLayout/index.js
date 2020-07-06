import React from 'react';
import PropTypes from 'prop-types';

import PageContainer from 'components/PageContainer';
import Footer from 'components/Footer';
import STYLES from './common-layout.scss';
import { cssModules } from 'gg-components/helpers/cssModules';
const getClassName = cssModules(STYLES);

const CommonLayout = props => {
  const { children } = props;

  return (
    <>
      <PageContainer id="mainScrollView" className={getClassName('common-layout__grow')}>
        {children}
      </PageContainer>
      <Footer />
    </>
  );
};

CommonLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CommonLayout;
