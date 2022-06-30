import React from 'react';
import PropTypes from 'prop-types';
import { cssModules } from '@george-gillams/components/helpers/cssModules';
import Button from 'components/common/Button';

import STYLES from './split-detail-view.scss';

const getClassName = cssModules(STYLES);

const SplitDetailView = props => {
  const { className, listView, detailView, closeLink, ...rest } = props;

  const outerClassNameFinal = [getClassName('split-detail-view__outer')];
  if (className) {
    outerClassNameFinal.push(className);
  }

  return (
    <div className={outerClassNameFinal.join(' ')} {...rest}>
      <div className={getClassName('split-detail-view__list-view')}>{listView}</div>
      {detailView && (
        <div className={getClassName('split-detail-view__detail-view')}>
          <div className={getClassName('split-detail-view__close-button-container')}>
            <Button href={closeLink}>Close</Button>
          </div>
          <div className={getClassName('split-detail-view__detail-view-content')}>{detailView}</div>
        </div>
      )}
    </div>
  );
};

SplitDetailView.propTypes = {
  closeLink: PropTypes.string.isRequired,
  listView: PropTypes.node.isRequired,
  className: PropTypes.string,
  detailView: PropTypes.node,
};

SplitDetailView.defaultProps = {
  className: null,
  detailView: null,
};

export default SplitDetailView;
