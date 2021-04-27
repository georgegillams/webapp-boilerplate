import React from 'react';

import CSSHack from 'gg-webapp/components/CSSHack';
import Users from 'containers/common/Admin/Users';
import FlexLayout from 'gg-webapp/components/FlexLayout';

const Page = props => {
  return (
    <FlexLayout>
      <CSSHack pageName="admin/users" />
      <Users {...props} />
    </FlexLayout>
  );
};

Page.propTypes = {};

export default Page;
