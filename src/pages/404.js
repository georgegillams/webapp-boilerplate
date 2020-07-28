import React from 'react';

import CommonLayout from 'components/common/CommonLayout';
import NotFound from 'containers/NotFound';

const Page = props => {
  return (
    <CommonLayout>
      <NotFound {...props}></NotFound>
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
