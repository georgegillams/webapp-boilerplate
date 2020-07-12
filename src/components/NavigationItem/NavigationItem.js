import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'gg-components/Button';
import { useRouter } from 'next/router';

const NavigationItem = props => {
  const { name, linkUrl, hrefExternal, onClick, ...rest } = props;

  const router = useRouter();

  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  if (!linkUrl || hrefExternal || isServer) {
    return (
      <Button href={linkUrl} hrefExternal={hrefExternal} bouncy {...rest}>
        {name}
      </Button>
    );
  }

  const onClickFinal = async e => {
    if (onClick) {
      onClick(e);
    }
    await router.push(linkUrl);
    if (scroll) {
      return window.scrollTo(0, 0);
    }
    return true;
  };

  return (
    <Button bouncy onClick={onClickFinal} {...rest}>
      {name}
    </Button>
  );
};

NavigationItem.propTypes = {
  name: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  hrefExternal: PropTypes.bool,
  onClick: PropTypes.func,
};
NavigationItem.defaultProps = {
  hrefExternal: false,
  onClick: null,
};

export default NavigationItem;
