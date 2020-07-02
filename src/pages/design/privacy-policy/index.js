import React from 'react';

import PrivacyPolicy from 'containers/PrivacyPolicy';
import CommonLayout from 'components/CommonLayout';

const Page = props => {
  return (
    <CommonLayout>
      <PrivacyPolicy {...props} />
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
