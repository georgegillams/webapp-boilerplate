import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cssModules } from 'gg-components/helpers/cssModules';

import STYLES from './page-container.scss';
import { DEBUG_SHOW_PAGE_CONTAINER_KEY } from 'helpers/storageConstants';

const getClassName = cssModules(STYLES);

const PageContainer = props => {
  const { className, ...rest } = props;
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    setShowDebug(window.localStorage.getItem(DEBUG_SHOW_PAGE_CONTAINER_KEY) === 'true');
  }, []);

  const outerClassNames = [getClassName('page-container__container')];
  if (showDebug) {
    outerClassNames.push([getClassName('page-container__container--debug')]);
  }

  if (className) {
    outerClassNames.push(className);
  }

  return <main className={outerClassNames.join(' ')} {...rest} />;
};

PageContainer.propTypes = {
  className: PropTypes.string,
};

PageContainer.defaultProps = {
  className: null,
};

export default PageContainer;
