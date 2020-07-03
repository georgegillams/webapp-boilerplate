import React from 'react';
import PropTypes from 'prop-types';
import { Card as GGCard } from 'gg-components/Card';
import Link from 'next/link';
import HelperFunctions from 'helpers/HelperFunctions';

const Card = props => {
  const { href, scroll, ...rest } = props;
  const hrefExternal = href && HelperFunctions.includes(href, 'http');

  if (hrefExternal) {
    return <GGCard href={href} {...rest} />;
  }

  return (
    <Link href={href} scroll={scroll} passHref>
      <GGCard href={href} {...rest} />
    </Link>
  );
};

Card.propTypes = {
  href: PropTypes.string.isRequired,
  scroll: PropTypes.bool,
};

Card.defaultProps = {
  scroll: true,
};

export default Card;
