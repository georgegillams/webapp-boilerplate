import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from '@george-gillams/components/Paragraph';
import { Section } from '@george-gillams/components/Section';
import TextLink from '../TextLink';

const LoggedOutOnly = (props) => {
  const { user, children, ...rest } = props;

  if (user) {
    return (
      <Section name="You're logged in" {...rest}>
        <Paragraph>
          <TextLink href="/account">Go to your account.</TextLink>
        </Paragraph>
      </Section>
    );
  }

  return children;
};

LoggedOutOnly.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object,
};

LoggedOutOnly.defaultProps = {
  user: null,
};

export default LoggedOutOnly;
