import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from '@george-gillams/components/navigation-bar';
import NavigationItem from 'components/common/NavigationItem';

import Logo from 'components/Logo';
import BurgerButtonLink from './BurgerButtonLink';

const NavigationBarWrapper = props => {
  const { authenticatorState } = props;
  const { user } = authenticatorState;

  const adminItem = user && user.admin ? <NavigationItem name="Admin" href="/admin" /> : null;

  const menuItems = [adminItem, <NavigationItem key="sitemap" name="Site map" href="/sitemap" />];

  const date = new Date();
  const isPride = date.getMonth() === 5;

  return (
    <NavigationBar
      menuItems={menuItems}
      logo={<Logo padding={false} pride={isPride} animated noJsLinkProvider={BurgerButtonLink} />}
    />
  );
};

NavigationBarWrapper.propTypes = {
  authenticatorState: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
};

export default NavigationBarWrapper;
