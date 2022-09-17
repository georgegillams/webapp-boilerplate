import React from 'react';

import { StyledThemeProvider, STYLED_THEMES } from '@george-gillams/components/styled-theming';
import { Container, StyledFooterNav, StyledLogo, StyledTechSpecs } from './footer.styles';

const Footer = props => {
  const date = new Date();
  const isPride = date.getMonth() === 5;

  return (
    <Container id="footer" {...props}>
      <StyledThemeProvider theme={STYLED_THEMES.white}>
        <StyledLogo pride={isPride} alwaysCentred padding={false} />
        <StyledTechSpecs />
        <StyledFooterNav />
      </StyledThemeProvider>
    </Container>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
