import React from 'react';

import CommonLayout from 'components/CommonLayout';
import Teapot from 'containers/Teapot';

const Page = props => {
  return (
    <CommonLayout>
      <Teapot {...props} />
    </CommonLayout>
  );
};

Page.getInitialProps = async ({ res }) => {
  res.status(418);
  return {};
};

Page.propTypes = {};

export default Page;
