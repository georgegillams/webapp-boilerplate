import React from 'react';
import PropTypes from 'prop-types';
import { Card as GGCard } from 'gg-components/Cards';
import Link from 'next/link';
import HelperFunctions from 'helpers/HelperFunctions';

const Card = props => {
  const { href } = props;
  const hrefExternal = href && HelperFunctions.includes(href, 'http');

  if (hrefExternal) {
    return <GGCard {...props} />;
  }

  return (
    <Link href={href} passHref>
      <GGCard {...props} />
    </Link>
  );
};

Card.propTypes = {
  href: PropTypes.string.isRequired,
};

export default Card;
