import React from 'react';
import PropTypes from 'prop-types';

import Home from 'containers/Home';
import { withTranslation } from 'utils/with-i18next';

export class AccountPage extends React.PureComponent {
  render() {
    return <Home {...this.props} />;
  }
}

AccountPage.propTypes = {
  t: PropTypes.func,
};

AccountPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default withTranslation('common')(AccountPage);
