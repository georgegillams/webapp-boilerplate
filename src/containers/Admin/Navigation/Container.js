import React from 'react';
import PageContainer from 'components/common/PageContainer';
import PropTypes from 'prop-types';
import PageTitle from 'components/common/PageTitle';
import DebugObject from 'components/common/DebugObject';
import LoadingCover from '@george-gillams/components/loading-cover';
import { FEATURE_CARD_LAYOUTS } from '@george-gillams/components/feature-card';
import { setPostLoginRedirect } from 'client-utils/common/storageHelpers';
import { StyledFeatureCard, CardContainer } from './admin-navigation.styles';

import Skeleton from './Skeleton';

import { AdminOnly } from 'components/common/Walls';

const AdminNavigation = props => {
  const { authenticatorState } = props;
  const { user } = authenticatorState;

  const page = (
    <PageContainer bottomPadding>
      <AdminOnly
        user={user}
        setLoginRedirect={() => {
          setPostLoginRedirect('admin');
        }}>
        <PageTitle name="Admin">
          <CardContainer>
            <StyledFeatureCard
              layout={FEATURE_CARD_LAYOUTS.narrowCompact}
              day={null}
              month={null}
              href="/status"
              title="Site status"
            />
            <StyledFeatureCard
              layout={FEATURE_CARD_LAYOUTS.narrowCompact}
              day={null}
              month={null}
              href="/debug"
              title="Debug settings"
            />
            <StyledFeatureCard
              layout={FEATURE_CARD_LAYOUTS.narrowCompact}
              day={null}
              month={null}
              href="/admin/analytics"
              title="Analytics"
            />
            <StyledFeatureCard
              layout={FEATURE_CARD_LAYOUTS.narrowCompact}
              day={null}
              month={null}
              href="/admin/emails"
              title="Emails"
            />
            <StyledFeatureCard
              layout={FEATURE_CARD_LAYOUTS.narrowCompact}
              day={null}
              month={null}
              href="/admin/notifications"
              title="Notifications"
            />
            <StyledFeatureCard
              layout={FEATURE_CARD_LAYOUTS.narrowCompact}
              day={null}
              month={null}
              href="/admin/users"
              title="Users"
            />
          </CardContainer>
        </PageTitle>
      </AdminOnly>
    </PageContainer>
  );

  return (
    <>
      <LoadingCover
        loadingSkeleton={Skeleton}
        loading={authenticatorState.user === undefined}
        error={!!authenticatorState.loadAuthError}>
        {page}
      </LoadingCover>
      <DebugObject debugTitle="Admin" debugObject={{ authenticatorState }} />
    </>
  );
};

AdminNavigation.propTypes = {
  authenticatorState: PropTypes.shape({
    user: PropTypes.object,
    loadAuthError: PropTypes.object,
  }).isRequired,
};

AdminNavigation.defaultProps = {};

export default AdminNavigation;
