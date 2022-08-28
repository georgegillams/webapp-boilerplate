import React from 'react';
import PageContainer from 'components/common/PageContainer';
import Skeleton, { SKELETON_STYLES } from '@george-gillams/components/skeleton';
import STYLES from './admin-navigation.scss';
import { cssModules } from '@george-gillams/components/helpers/cssModules';

const getClassName = cssModules(STYLES);

const PageSkeleton = props => {
  return (
    <PageContainer {...props}>
      <Skeleton skeletonStyle={SKELETON_STYLES.section} />
      <div className={getClassName('admin-navigation__card-container')}>
        <Skeleton skeletonStyle={SKELETON_STYLES.cardCompact} />
        <Skeleton skeletonStyle={SKELETON_STYLES.cardCompact} />
        <Skeleton skeletonStyle={SKELETON_STYLES.cardCompact} />
        <Skeleton skeletonStyle={SKELETON_STYLES.cardCompact} />
      </div>
    </PageContainer>
  );
};

export default PageSkeleton;
