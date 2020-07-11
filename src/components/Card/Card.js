import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card as GGCard } from 'gg-components/Card';
import HelperFunctions from 'helpers/HelperFunctions';
import { useRouter } from 'next/router';

const Card = props => {
  const { href, onClick, scroll, ...rest } = props;
  const router = useRouter();

  const hrefExternal = href && HelperFunctions.includes(href, 'http');

  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  if (hrefExternal || isServer) {
    return <GGCard href={href} onClick={onClick} {...rest} />;
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
