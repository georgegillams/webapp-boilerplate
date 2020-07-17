import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card as GGCard } from 'gg-components/Card';
import HelperFunctions from 'helpers/HelperFunctions';
import Router, { useRouter } from 'next/router';

const Card = props => {
  const { href, onClick, scroll, ...rest } = props;
  const router = useRouter();

  const hrefExternal = href && HelperFunctions.includes(href, 'http');

  const [isServer, setIsServer] = useState(true);

  const renderNormalLink = !href || hrefExternal;

  useEffect(() => {
    setIsServer(false);
    if (!renderNormalLink && process.env.NODE_ENV !== 'test') {
      Router.prefetch(href);
    }
  }, []);

  if (isServer || renderNormalLink) {
    return <GGCard href={href} onClick={onClick} {...rest} />;
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

  return <GGCard style={{ cursor: 'pointer' }} onClick={onClickFinal} {...rest} />;
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
