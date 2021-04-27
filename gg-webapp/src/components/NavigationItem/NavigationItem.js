import React from 'react';
import PropTypes from 'prop-types';
import Button from '@george-gillams/webapp/components/Button';

const NavigationItem = (props) => {
  const { name, href, ...rest } = props;

  return (
    <Button href={href} bouncy {...rest}>
      {name}
    </Button>
  );
};

NavigationItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
NavigationItem.defaultProps = {};

export default NavigationItem;
