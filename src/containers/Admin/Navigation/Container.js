import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from 'components/PageTitle';
import { DebugObject, LoadingCover } from 'gg-components/Auth';
import { ArticleCard, ARTICLE_CARD_LAYOUTS } from 'gg-components/Cards';
import STYLES from './admin-navigation.scss';
import { cssModules } from 'gg-components/helpers/cssModules';

import Skeleton from './Skeleton';

import { AdminOnly } from 'components/Walls';

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
      <AdminOnly user={user}>
        <PageTitle name="Admin">
          <div className={getClassName('admin-navigation__card-container')}>
            <ArticleCard
              layout={ARTICLE_CARD_LAYOUTS.narrowCompact}
              day={null}
              month={null}
              className={getClassName('admin-navigation__card')}
              linkUrl="/admin/analytics"
              title="Analytics"
            />
            <ArticleCard
              layout={ARTICLE_CARD_LAYOUTS.narrowCompact}
              day={null}
              month={null}
              className={getClassName('admin-navigation__card')}
              linkUrl="/admin/notifications"
              title="Notifications"
            />
            <ArticleCard
              layout={ARTICLE_CARD_LAYOUTS.narrowCompact}
              day={null}
              month={null}
              className={getClassName('admin-navigation__card')}
              linkUrl="/admin/users"
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
        error={authenticatorState.loadAuthError}>
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
