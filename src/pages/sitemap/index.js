import React from 'react';

import CSSHack from 'components/common/CSSHack';
import SiteMap from 'containers/SiteMap';
import CommonLayout from 'components/common/CommonLayout';

const Page = props => {
  return (
    <CommonLayout>
      <CSSHack pageName="sitemap" />
      <SiteMap {...props} />
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
