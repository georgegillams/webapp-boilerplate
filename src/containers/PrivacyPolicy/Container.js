import React from 'react';
import PageTitle from 'components/PageTitle';
import { Paragraph } from 'gg-components/Paragraph';

import ConsentSuppressor from 'containers/ConsentSuppressor';

const PrivacyPolicy = () => {
  return (
    <>
      <ConsentSuppressor />
      <PageTitle name="Privacy policy">
        <Paragraph>blah</Paragraph>
      </PageTitle>
    </>
  );
};

export default PrivacyPolicy;
