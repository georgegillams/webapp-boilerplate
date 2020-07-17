import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button as GGButton } from 'gg-components/Button';
import Router, { useRouter } from 'next/router';

const Button = props => {
  const { href, hrefExternal, onClick, ...rest } = props;

  const router = useRouter();

  const [isServer, setIsServer] = useState(true);

  const renderNormalLink = !href || hrefExternal;

  useEffect(() => {
    setIsServer(false);
    if (!renderNormalLink && process.env.NODE_ENV !== 'test') {
      Router.prefetch(href);
    }
  }, []);

  if (isServer || renderNormalLink) {
    return <GGButton {...props} />;
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

  return <GGButton onClick={onClickFinal} {...rest} />;
};

Button.propTypes = {
  href: PropTypes.string,
  hrefExternal: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  href: null,
  hrefExternal: false,
  className: null,
  onClick: null,
};

export default Button;
