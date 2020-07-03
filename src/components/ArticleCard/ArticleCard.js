import React from 'react';
import PropTypes from 'prop-types';
import { ArticleCard as GGArticleCard } from 'gg-components/ArticleCard';
import Link from 'next/link';
import HelperFunctions from 'helpers/HelperFunctions';

const ArticleCard = props => {
  const { href } = props;
  const hrefExternal = href && HelperFunctions.includes(href, 'http');

  if (hrefExternal) {
    return <GGArticleCard {...props} />;
  }

  return (
    <Link href={href} passHref>
      <GGArticleCard {...props} />
    </Link>
  );
};

ArticleCard.propTypes = {
  href: PropTypes.string.isRequired,
};

export default ArticleCard;
