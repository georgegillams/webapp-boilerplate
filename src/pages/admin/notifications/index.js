import React from 'react';

import CSSHack from 'gg-webapp/components/CSSHack';
import Notifications from 'containers/common/Admin/Notifications';
import LegacyCommonLayout from 'gg-webapp/components/LegacyCommonLayout';

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
