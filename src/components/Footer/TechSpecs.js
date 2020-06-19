import React from 'react';
import PropTypes from 'prop-types';
import { cssModules } from 'gg-components/helpers/cssModules';
import { Section } from 'gg-components/Typography';

import STYLES from './tech-specs.scss';
import reactLogo from './react-logo.svg';
import reduxLogo from './redux-logo.svg';
import awsLogo from './aws-logo.svg';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const TechSpecs = props => {
  const { light, fancy, className, ...rest } = props;

  const outerClassNameFinal = [];
  if (className) {
    outerClassNameFinal.push(className);
  }

  const iconClassNameFinal = [getClassName('tech-specs__icon')];
  const darkIconClassNameFinal = [getClassName('tech-specs__icon')];
  iconClassNameFinal.push(getClassName('tech-specs__icon--no-light'));
  darkIconClassNameFinal.push(getClassName('tech-specs__icon--light-inverted'));

  return (
    <div className={outerClassNameFinal.join(' ')} {...rest}>
      <Section className={getClassName('tech-specs__container')} noPadding light={light} fancy={fancy}>
        Built in
        <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
          <img alt="React" width={5} height={5} className={darkIconClassNameFinal.join(' ')} src={reactLogo} />
        </a>
        and
        <a href="https://redux.js.org/" rel="noopener noreferrer" target="_blank">
          <img alt="Redux" width={5} height={5} className={darkIconClassNameFinal.join(' ')} src={reduxLogo} />
        </a>
        Hosted on
        <a href="https://aws.amazon.com/" rel="noopener noreferrer" target="_blank">
          <img
            alt="Amazon Web Services"
            width={8.28}
            height={5}
            className={darkIconClassNameFinal.join(' ')}
            style={{ marginTop: '.8rem', maxWidth: '2.9rem' }}
            src={awsLogo}
          />
        </a>
      </Section>
    </div>
  );
};

TechSpecs.propTypes = {
  light: PropTypes.bool,
  fancy: PropTypes.bool,
  className: PropTypes.string,
};

TechSpecs.defaultProps = {
  light: false,
  fancy: false,
  className: null,
};

export default TechSpecs;
