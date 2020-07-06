import React from 'react';
import PropTypes from 'prop-types';
import { NavigationBar } from 'gg-components/NavigationBar';
import NavigationItem from 'components/NavigationItem';
import { SmallButtonSkeleton } from 'gg-components/Skeletons';

import Logo from 'components/Logo';

const NavigationBarWrapper = props => {
  const { authenticatorState } = props;
  const { user } = authenticatorState;

  const accountItem =
    user === undefined ? (
      <SmallButtonSkeleton />
    ) : (
      <NavigationItem name={user ? 'Account' : 'Login'} linkUrl={user ? '/account' : '/login'} />
    );

  const adminItem = user && user.admin ? <NavigationItem name="Admin" linkUrl="/admin" /> : null;

  const menuItems = [
    <NavigationItem key="home" name="Home" linkUrl="/" />,
    adminItem,
    accountItem,
    <NavigationItem key="sitemap" name="Site map" linkUrl="/sitemap" />,
  ];

  const date = new Date();
  const isPride = date.getMonth() === 5;

  return (
    <NavigationBar
      menuItems={menuItems}
      logo={<Logo padding={false} pride={isPride} animated />}
      accountMenuItem={accountItem}
    />
  );
};

NavigationBarWrapper.propTypes = {
  authenticatorState: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
};

export default NavigationBarWrapper;
