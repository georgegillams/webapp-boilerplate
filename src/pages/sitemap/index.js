import React from 'react';

import SiteMap from 'containers/SiteMap';
import CommonLayout from 'components/CommonLayout';

export class Page extends React.PureComponent {
  render() {
    return (
      <CommonLayout>
        <SiteMap {...this.props} />
      </CommonLayout>
    );
  }
}

Page.propTypes = {};

export default Page;
