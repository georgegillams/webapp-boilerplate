import React from 'react';

import CSSHack from '@george-gillams/webapp/components/CSSHack';
import Emails from 'containers/common/Admin/Emails';
import FlexLayout from '@george-gillams/webapp/components/FlexLayout';

const Page = props => {
  return (
    <FlexLayout>
      <CSSHack pageName="admin/emails" />
      <Emails {...props} />
    </FlexLayout>
  );
};

Page.propTypes = {};

export default Page;
