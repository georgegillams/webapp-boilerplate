import React from 'react';
import PropTypes from 'prop-types';
import { TextLink as GGTextLink } from 'gg-components/Typography';
import Link from 'next/link';

const TextLink = props => {
  const { href, hrefExternal, ...rest } = props;
  if (hrefExternal) {
    return <TextLink {...props} />;
  }

  return (
    <Link href={href} passHref>
      <GGTextLink href={href} {...rest} />
    </Link>
  );
};

TextLink.propTypes = {
  href: PropTypes.string.isRequired,
  hrefExternal: PropTypes.bool,
};
TextLink.defaultProps = {
  hrefExternal: false,
};

export default TextLink;
