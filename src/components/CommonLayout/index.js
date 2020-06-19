import React from 'react';
import PropTypes from 'prop-types';

import PageContainer from 'components/PageContainer';
import Footer from 'components/Footer';

const CommonLayout = props => {
  const { children } = props;

  return (
    <>
      <PageContainer id="mainScrollView">{children}</PageContainer>
      <Footer />
    </>
  );
};

CommonLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CommonLayout;
