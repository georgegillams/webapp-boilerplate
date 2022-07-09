import React from 'react';
import PropTypes from 'prop-types';
import Skeleton, { SKELETON_STYLES } from '@george-gillams/components/skeleton';

const PageSkeleton = props => {
  const { className } = props;

  const outerClassNames = [];

  if (className) {
    outerClassNames.push(className);
  }

  return (
    <div className={outerClassNames.join(' ')}>
      <Skeleton skeletonStyle={SKELETON_STYLES.section} />
      <Skeleton skeletonStyle={SKELETON_STYLES.input} style={{ marginTop: '1.2rem' }} />
      <Skeleton skeletonStyle={SKELETON_STYLES.checkbox} />
      <Skeleton skeletonStyle={SKELETON_STYLES.button} />
    </div>
  );
};

Skeleton.propTypes = {
  className: PropTypes.string,
};

Skeleton.defaultProps = {
  className: null,
};

export default PageSkeleton;
