import React from 'react';

import Users from 'containers/Admin/Users';
import FlexLayout from 'components/common/FlexLayout';

const Page = props => {
  return (
    <FlexLayout>
      <Users {...props} />
    </FlexLayout>
  );
};

Page.propTypes = {};

export default Page;
