import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer';

const CommonLayout = props => {
  const { children } = props;

  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

CommonLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CommonLayout;
