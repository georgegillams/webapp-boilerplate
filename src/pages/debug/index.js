import React from 'react';

import Debug from 'containers/Debug';
import CommonLayout from 'components/common/CommonLayout';

const Page = props => {
  return (
    <CommonLayout>
      <Debug {...props} />
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
