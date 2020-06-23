import React from 'react';
import PropTypes from 'prop-types';
import { cssModules } from 'gg-components/helpers/cssModules';

import Logo from '../Logo';

import TechSpecs from './TechSpecs';
import STYLES from './footer.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const Footer = props => {
  const { className, ...rest } = props;
  const outerClassNames = [getClassName('footer__container')];
  if (className) {
    outerClassNames.push(className);
  }

  const date = new Date();
  const isPride = date.getMonth() === 5;

  return (
    <footer id="footer" className={outerClassNames.join(' ')} {...rest}>
      <Logo pride={isPride} alwaysCentred className={getClassName('footer__logo')} padding={false} />
      <TechSpecs className={getClassName('footer__tech')} light />
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: null,
};

export default Footer;
