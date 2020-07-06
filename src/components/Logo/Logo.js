import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { cssModules } from 'gg-components/helpers/cssModules';

import STYLES from './logo.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const Logo = props => {
  const { padding, animated, className, alwaysCentered, pride, ...rest } = props;
  const classNameFinal = [getClassName('logo__container')];
  if (className) {
    classNameFinal.push(className);
  }
  if (alwaysCentered) {
    classNameFinal.push(getClassName('logo__container--centered'));
  }

  const largeTextClassNameFinal = [getClassName('logo__heading')];
  if (animated) {
    largeTextClassNameFinal.push(getClassName('logo__subheading--animated'));
  }
  if (pride) {
    largeTextClassNameFinal.push(getClassName('logo__heading--pride'));
  }

  if (!padding) {
    classNameFinal.push(getClassName('logo__container--no-padding'));
    largeTextClassNameFinal.push(getClassName('logo__heading--no-padding'));
  }

  return (
    <div className={classNameFinal.join(' ')} {...rest}>
      <Link href="/">
        <a href="/">
          <h1 role="button" aria-label="Home page" className={largeTextClassNameFinal.join(' ')}>
            {'LOGO'}
          </h1>
        </a>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  padding: PropTypes.bool,
  animated: PropTypes.bool,
  pride: PropTypes.bool,
  alwaysCentered: PropTypes.bool,
};

Logo.defaultProps = {
  className: null,
  padding: true,
  animated: false,
  pride: false,
  alwaysCentered: false,
};

export default Logo;
