import React from 'react';
import TextLink from 'components/common/TextLink';

import { Section, Wrapper } from './footer-nav.styles';

const TechSpecs = props => {
  return (
    <Wrapper {...props}>
      <Section>
        <TextLink href="/sitemap">Site map</TextLink>
        <TextLink href="/privacy-policy">Privacy</TextLink>
        <TextLink href="/login">Login/Account</TextLink>
        <TextLink href="/status">Status</TextLink>
      </Section>
    </Wrapper>
  );
};

export default TechSpecs;
