import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ArticleCard as GGArticleCard, ARTICLE_CARD_LAYOUTS } from 'gg-components/ArticleCard';
import HelperFunctions from 'helpers/HelperFunctions';
import { useRouter } from 'next/router';

const ArticleCard = props => {
  const { href, onClick, scroll, ...rest } = props;
  const router = useRouter();

  const hrefExternal = href && HelperFunctions.includes(href, 'http');

  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  if (hrefExternal || isServer) {
    return <GGArticleCard href={href} onClick={onClick} {...rest} />;
  }

  const onClickFinal = async e => {
    if (onClick) {
      onClick(e);
    }
    await router.push(href);
    if (scroll) {
      return window.scrollTo(0, 0);
    }
    return true;
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
