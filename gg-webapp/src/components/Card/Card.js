import React from 'react';
import PropTypes from 'prop-types';
import { Card as GGCard } from '@george-gillams/components/Card';
import HelperFunctions from '../../helpers/HelperFunctions';
import nextifyHref from '../../utils/nextifyHref';
import Link from 'next/link';

const Card = props => {
  const { href, onClick, ...rest } = props;

  const hrefExternal = href && HelperFunctions.includes(href, 'http');

  const renderNormalCard = !href || hrefExternal;

  const destination = nextifyHref(href);

  if (renderNormalCard) {
    return <GGCard href={href} onClick={onClick} {...rest} />;
  }

  return (
    <Link passHref href={destination.url} as={destination.as} {...destination.options}>
      <GGCard {...rest} />
    </Link>
  );
};

Card.propTypes = {
  href: PropTypes.string.isRequired,
  scroll: PropTypes.bool,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  scroll: true,
  onClick: null,
};

export default Card;
