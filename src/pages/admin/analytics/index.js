import React from 'react';

import CSSHack from 'gg-webapp/components/CSSHack';
import Analytics from 'containers/common/Admin/Analytics';
import FlexLayout from 'gg-webapp/components/FlexLayout';

const Page = props => {
  return (
    <FlexLayout>
      <CSSHack pageName="admin/analytics" />
      <Analytics {...props} />
    </FlexLayout>
  );
};

Page.propTypes = {};

export default Page;
