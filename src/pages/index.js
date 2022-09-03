import React from 'react';

import Home from 'containers/HomePage';
import CommonLayout from 'components/common/CommonLayout';

const Page = props => {
  return (
    <CommonLayout>
      <Home {...props} />
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
