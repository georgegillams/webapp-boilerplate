import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button as GGButton } from 'gg-components/Button';
import { useRouter } from 'next/router';

const Button = props => {
  const { href, hrefExternal, onClick, ...rest } = props;

  const router = useRouter();

  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  if (isServer || !href || hrefExternal) {
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
