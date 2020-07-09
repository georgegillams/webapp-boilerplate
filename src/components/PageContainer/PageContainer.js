import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cssModules } from 'gg-components/helpers/cssModules';

import STYLES from './page-container.scss';
import { DEBUG_SHOW_PAGE_CONTAINER_KEY } from 'helpers/storageConstants';

export const LAYOUT_STYLES = {
  default: 'default',
  prose: 'prose',
  fullWidthCenter: 'fullWidthCenter',
};

const getClassName = cssModules(STYLES);

const PageContainer = props => {
  const { className, layout, ...rest } = props;
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    setShowDebug(window.localStorage.getItem(DEBUG_SHOW_PAGE_CONTAINER_KEY) === 'true');
  }, []);

  const outerClassNames = [getClassName('page-container__container')];
  if (showDebug) {
    outerClassNames.push([getClassName('page-container__container--debug')]);
  }
  if (layout === LAYOUT_STYLES.default) {
    outerClassNames.push([getClassName('page-container__container--regular')]);
  }
  if (layout === LAYOUT_STYLES.prose) {
    outerClassNames.push([getClassName('page-container__container--prose')]);
  }
  if (layout === LAYOUT_STYLES.fullWidthCenter) {
    outerClassNames.push([getClassName('page-container__container--full-width-center')]);
  }

  if (className) {
    outerClassNames.push(className);
  }

  return <main className={outerClassNames.join(' ')} {...rest} />;
};

PageContainer.propTypes = {
  layout: PropTypes.oneOf(Object.keys(LAYOUT_STYLES)),
  className: PropTypes.string,
};

PageContainer.defaultProps = {
  layout: LAYOUT_STYLES.default,
  className: null,
};

export default PageContainer;
