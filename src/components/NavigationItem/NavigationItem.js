import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'gg-components/Button';
import Link from 'next/link';

const NavigationItem = props => {
  const { name, linkUrl, hrefExternal, ...rest } = props;
  if (hrefExternal) {
    return (
      <Button href={linkUrl} hrefExternal bouncy {...rest}>
        {name}
      </Button>
    );
  }

  return (
    <Link href={linkUrl}>
      <Button href={linkUrl} hrefDumb bouncy {...rest}>
        {name}
      </Button>
    </Link>
  );
};

NavigationItem.propTypes = {
  name: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  hrefExternal: PropTypes.bool,
};
NavigationItem.defaultProps = {
  hrefExternal: false,
};

export default NavigationItem;
