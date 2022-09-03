import React from 'react';
import PageContainer from 'components/common/PageContainer';
import Skeleton, { SKELETON_STYLES } from '@george-gillams/components/skeleton';
import { CardContainer } from './admin-navigation.styles';

const PageSkeleton = props => {
  return (
    <PageContainer {...props}>
      <Skeleton skeletonStyle={SKELETON_STYLES.section} />
      <CardContainer>
        <Skeleton skeletonStyle={SKELETON_STYLES.cardCompact} />
        <Skeleton skeletonStyle={SKELETON_STYLES.cardCompact} />
        <Skeleton skeletonStyle={SKELETON_STYLES.cardCompact} />
        <Skeleton skeletonStyle={SKELETON_STYLES.cardCompact} />
      </CardContainer>
    </PageContainer>
  );
};

export default PageSkeleton;
