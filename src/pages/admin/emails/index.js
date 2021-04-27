import React from 'react';

import CSSHack from 'gg-webapp/components/CSSHack';
import Emails from 'containers/common/Admin/Emails';
import FlexLayout from 'gg-webapp/components/FlexLayout';

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
