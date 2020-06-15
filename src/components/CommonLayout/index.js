import React from 'react';

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

export default CommonLayout;
