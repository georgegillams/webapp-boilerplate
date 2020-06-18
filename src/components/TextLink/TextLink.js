import React from 'react';
import PropTypes from 'prop-types';
import { TextLink as GGTextLink } from 'gg-components/Typography';
import Link from 'next/link';

const TextLink = props => {
  const { href, ...rest } = props;

  return (
    <Link href={href}>
      <GGTextLink href={href} hrefDumb {...rest}></GGTextLink>
    </Link>
  );
};

TextLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default TextLink;
