import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/common/Button';

const NavigationItem = props => {
  const { name, linkUrl, ...rest } = props;

  return (
    <Button href={linkUrl} bouncy {...rest}>
      {name}
    </Button>
  );
};

NavigationItem.propTypes = {
  name: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};
NavigationItem.defaultProps = {};

export default NavigationItem;
