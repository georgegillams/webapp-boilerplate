import React from 'react';

import CSSHack from 'gg-webapp/components/CSSHack';
import SiteMap from 'containers/SiteMap';
import LegacyCommonLayout from 'gg-webapp/components/LegacyCommonLayout';

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
