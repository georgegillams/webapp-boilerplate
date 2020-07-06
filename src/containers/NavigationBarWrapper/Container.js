import React from 'react';
import PropTypes from 'prop-types';
import { NavigationBar } from 'gg-components/NavigationBar';
import NavigationItem from 'components/NavigationItem';
import { SmallButtonSkeleton } from 'gg-components/Skeletons';

import Logo from 'components/Logo';

const NavigationBarWrapper = props => {
  const { user, userLoading } = props;

  const accountItem = userLoading ? (
    <SmallButtonSkeleton />
  ) : (
    <NavigationItem name={user ? 'Account' : 'Login'} linkUrl={user ? '/account' : '/login'} />
  );

  const adminItem = user && user.admin ? <NavigationItem name="Admin" linkUrl="/admin" /> : null;

  const menuItems = [
    <NavigationItem key="home" name="Home" linkUrl="/" />,
    <NavigationItem key="blog" name="Blog" linkUrl="/blog" />,
    <NavigationItem key="photography" name="Photography" linkUrl="/photography" />,
    <NavigationItem key="work" name="Work" linkUrl="/work" />,
    <NavigationItem key="contact" name="Contact" linkUrl="/contact" />,
    <NavigationItem key="github" name="Github" linkUrl="https://github.com/georgegillams" hrefExternal />,
    adminItem,
    accountItem,
    <NavigationItem key="sitemap" name="Site map" linkUrl="/sitemap" />,
  ];

  const date = new Date();
  const isPride = date.getMonth() === 5;

  return (
    <NavigationBar
      menuItems={menuItems}
      logo={<Logo padding={false} pride={isPride} small animated />}
      accountMenuItem={accountItem}
    />
  );
};

NavigationBarWrapper.propTypes = {
  user: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  userLoading: PropTypes.bool.isRequired,
};

export default NavigationBarWrapper;