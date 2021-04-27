import React from 'react';

import CSSHack from '@george-gillams/webapp/components/CSSHack';
import LegacyCommonLayout from '@george-gillams/webapp/components/LegacyCommonLayout';
import Teapot from 'containers/common/Teapot';

const Page = props => {
  return (
    <LegacyCommonLayout>
      <CSSHack pageName="teapot" />
      <Teapot {...props} />
    </LegacyCommonLayout>
  );
};

Page.getInitialProps = async ({ res }) => {
  if (res) {
    res.status(418);
  }
  return {};
};

Page.propTypes = {};

export default Page;
