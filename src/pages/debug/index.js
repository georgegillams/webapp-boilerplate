import React from 'react';

import Debug from 'containers/Debug';
import CommonLayout from 'components/CommonLayout';

const Page = props => {
  return (
    <CommonLayout>
      <Debug {...props} />
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
