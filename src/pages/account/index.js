import React from 'react';

import Account from 'containers/Account';
import CommonLayout from 'components/CommonLayout';

const Page = props => {
  return (
    <CommonLayout>
      <Account {...props} />
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
