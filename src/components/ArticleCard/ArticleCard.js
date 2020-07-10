import React from 'react';
import PropTypes from 'prop-types';
import { ArticleCard as GGArticleCard, ARTICLE_CARD_LAYOUTS } from 'gg-components/ArticleCard';
import HelperFunctions from 'helpers/HelperFunctions';
import { useRouter } from 'next/router';

const ArticleCard = props => {
  const { href, onClick, scroll, ...rest } = props;
  const router = useRouter();

  const hrefExternal = href && HelperFunctions.includes(href, 'http');

  const isServer = typeof window === 'undefined';

  if (hrefExternal || isServer) {
    return <GGArticleCard href={href} onClick={onClick} {...rest} />;
  }

  const onClickFinal = e => {
    if (onClick) {
      onClick(e);
    }
    return router.push(href).then(() => {
      if (scroll) {
        return window.scrollTo(0, 0);
      }
      return true;
    });
  };

  return <GGArticleCard style={{ cursor: 'pointer' }} onClick={onClickFinal} {...rest} />;
};

ArticleCard.propTypes = {
  href: PropTypes.string.isRequired,
  scroll: PropTypes.bool,
  onClick: PropTypes.func,
};

ArticleCard.defaultProps = {
  scroll: true,
  onClick: null,
};

export default ArticleCard;
export { ARTICLE_CARD_LAYOUTS };
