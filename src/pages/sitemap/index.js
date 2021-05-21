import React from 'react';

import CSSHack from '@george-gillams/webapp/components/CSSHack';
import SiteMap from 'containers/SiteMap';
import LegacyCommonLayout from 'components/common/LegacyCommonLayout';

const Page = props => {
  return (
    <LegacyCommonLayout>
      <CSSHack pageName="sitemap" />
      <SiteMap {...props} />
    </LegacyCommonLayout>
  );
};

Page.propTypes = {};

export default Page;
