import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from 'gg-webapp/components/PageTitle';
import { DebugObject } from 'gg-webapp/components/DebugObject';
import { LoadingCover } from 'gg-components/LoadingCover';
import { FEATURE_CARD_LAYOUTS } from 'gg-components/FeatureCard';
import FeatureCard from 'gg-webapp/components/FeatureCard';
import STYLES from './admin-navigation.scss';
import { cssModules } from 'gg-components/helpers/cssModules';
import { setPostLoginRedirect } from 'client-utils/common/storageHelpers';

import Skeleton from './Skeleton';

import { AdminOnly } from 'gg-webapp/components/Walls';

const getClassName = cssModules(STYLES);

const AdminNavigation = props => {
  const {
    authenticatorState,

    className,
  } = props;
  const { user } = authenticatorState;

  const outerClassNames = [];

  if (className) {
    outerClassNames.push(className);
  }

  const page = (
    <div className={outerClassNames.join(' ')}>
      <AdminOnly
        user={user}
        setLoginRedirect={() => {
          setPostLoginRedirect('admin');
        }}>
        <PageTitle name="Admin">
          <div className={getClassName('admin-navigation__card-container')}>
            <FeatureCard
              layout={FEATURE_CARD_LAYOUTS.narrowCompact}
              day={null}
              month={null}
              className={getClassName('admin-navigation__card')}
              href="/debug"
              title="Debug settings"
            />
            <FeatureCard
              layout={FEATURE_CARD_LAYOUTS.narrowCompact}
              day={null}
              month={null}
              className={getClassName('admin-navigation__card')}
              href="/admin/analytics"
              title="Analytics"
            />
            <FeatureCard
              layout={FEATURE_CARD_LAYOUTS.narrowCompact}
              day={null}
              month={null}
              className={getClassName('admin-navigation__card')}
              href="/admin/emails"
              title="Emails"
            />
            <FeatureCard
              layout={FEATURE_CARD_LAYOUTS.narrowCompact}
              day={null}
              month={null}
              className={getClassName('admin-navigation__card')}
              href="/admin/notifications"
              title="Notifications"
            />
            <FeatureCard
              layout={FEATURE_CARD_LAYOUTS.narrowCompact}
              day={null}
              month={null}
              className={getClassName('admin-navigation__card')}
              href="/admin/users"
              title="Users"
            />
          </div>
        </PageTitle>
      </AdminOnly>
    </div>
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
  className: PropTypes.string,
};

AdminNavigation.defaultProps = {
  className: null,
};

export default AdminNavigation;
