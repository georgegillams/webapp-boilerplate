import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/footer2';
import { StyledMainWrapper } from './common-layout.styles';
import { withScrollAnimation, ANIMATIONS } from '@george-gillams/components/effects';

const FooterWithScroll = withScrollAnimation(Footer, { animation: ANIMATIONS.fade });

const CommonLayout = props => {
  const { children, ...rest } = props;

  return (
    <>
      <StyledMainWrapper {...rest}>{children}</StyledMainWrapper>
      <FooterWithScroll />
    </>
  );
};

CommonLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CommonLayout;
