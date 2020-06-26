import React from 'react';
import PropTypes from 'prop-types';
import { ArticleCard as GGArticleCard } from 'gg-components/Cards';
import Link from 'next/link';
import HelperFunctions from 'helpers/HelperFunctions';

const ArticleCard = props => {
  const { linkUrl } = props;
  const hrefExternal = HelperFunctions.includes(linkUrl, 'http');

  if (hrefExternal) {
    return <GGArticleCard {...props} />;
  }

  return (
    <Link href={linkUrl} passHref>
      <GGArticleCard {...props} />
    </Link>
  );
};

ArticleCard.propTypes = {
  linkUrl: PropTypes.string.isRequired,
};

export default ArticleCard;
