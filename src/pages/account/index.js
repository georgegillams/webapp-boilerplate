import React from 'react';

import Account from 'containers/Account';
import CommonLayout from 'components/CommonLayout';

export class AccountPage extends React.PureComponent {
  render() {
    return (
      <CommonLayout>
        <Account {...this.props} />;
      </CommonLayout>
    );
  }
}

AccountPage.propTypes = {};

AccountPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default AccountPage;
