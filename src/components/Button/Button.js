import React from 'react';
import PropTypes from 'prop-types';
import { Button as GGButton } from 'gg-components/Button';
import Link from 'next/link';

const Button = props => {
  const { href, hrefExternal } = props;

  if (!href || hrefExternal) {
    return <GGButton {...props} />;
  }

  return (
    <Link href={href} passHref>
      <GGButton {...props} />
    </Link>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  hrefExternal: PropTypes.bool,
};

Button.defaultProps = {
  href: null,
  hrefExternal: false,
};

export default Button;
