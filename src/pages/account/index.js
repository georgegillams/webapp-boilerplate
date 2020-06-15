import React from 'react';
import PropTypes from 'prop-types';

import Account from 'containers/Account';
import { withTranslation } from 'utils/with-i18next';
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

AccountPage.propTypes = {
  t: PropTypes.func,
};

AccountPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default withTranslation('common')(AccountPage);
