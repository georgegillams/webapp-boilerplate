import React from 'react';

import CSSHack from '@george-gillams/webapp/components/CSSHack';
import Notifications from 'containers/common/Admin/Notifications';
import LegacyCommonLayout from 'components/common/LegacyCommonLayout';

const Page = props => {
  return (
    <LegacyCommonLayout>
      <CSSHack pageName="admin/notifications" />
      <Notifications {...props} />
    </LegacyCommonLayout>
  );
};

Page.propTypes = {};

export default Page;
