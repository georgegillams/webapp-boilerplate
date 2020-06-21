import React from 'react';

import Login from 'containers/Login';
import CommonLayout from 'components/CommonLayout';

const Page = props => {
  return (
    <CommonLayout>
      <Login {...props} />
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
