import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageTitle from 'components/PageTitle';
import { DebugObject, LoadingCover } from 'gg-components/Auth';
import { Button } from 'gg-components/Button';
import { Paragraph, Section, SubSection } from 'gg-components/Typography';
import Card from 'components/Card';
import { AdminOnly } from 'components/Walls';
import { SplitDetailView } from 'components/SplitDetailView';
import { setPostLoginRedirect } from 'utils/storageHelpers';
import Skeleton from './Skeleton';
import { withRouter } from 'next/router';
import { Select, Input } from 'gg-components/Input';
import { Checkbox } from 'gg-components/Checkbox';

import { useInjectSaga } from 'utils/redux/inject-saga';
import { useInjectReducer } from 'utils/redux/inject-reducer';
import AdminUsersAPIEntity from './AdminUsersAPIEntity';

import { KEY } from './constants';
import saga from './saga';
import reducer from './reducer';
import { cssModules } from 'gg-components/helpers/cssModules';
import STYLES from './admin-users.scss';

const getClassName = cssModules(STYLES);

const AdminUsers = props => {
  useInjectSaga({ key: KEY, saga });
  useInjectReducer({ key: KEY, reducer });

  const [firstPageHit, setFirstPageHit] = useState(true);
  const [highlightId, setHighlightId] = useState(null);
  const [highlightToScrollTo, setHighlightToScrollTo] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filterDeleted, setFilterDeleted] = useState(true);
  const [filterAdminStatus, setFilterAdminStatus] = useState('all');
  const [filterEmailVerified, setFilterEmailVerified] = useState('all');
  const [filterName, setFilterName] = useState('');

  const {
    load,
    remove,
    requestMagicLink,

    adminUsersState,
    authenticatorState,

    router,
  } = props;

  const { loadError, users, removing, requesting } = adminUsersState;
  const { user } = authenticatorState;

  useEffect(() => {
    load();
  }, []);

  const scrollToHighlightedId = () => {
    if (!highlightToScrollTo) {
      return;
    }

    const scrollToElement = document.getElementById(highlightToScrollTo);
    if (scrollToElement) {
      scrollToElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setHighlightToScrollTo(null);
    }
  };

  useEffect(() => {
    if (!router || !router.query || !router.query.highlight) {
      setHighlightId(null);
      setFirstPageHit(false);
      return;
    }

    const highlight = router.query.highlight;
    setHighlightId(highlight);
    if (firstPageHit) {
      setHighlightToScrollTo(highlight);
      setFirstPageHit(false);
    }
  }, [router]);

  useEffect(() => {
    scrollToHighlightedId();
  });

  let filteredUsers = users;
  if (filteredUsers && filteredUsers.filter) {
    if (filterDeleted) {
      filteredUsers = filteredUsers.filter(x => !x.deleted);
    }
    if (filterAdminStatus && filterAdminStatus !== 'all') {
      filteredUsers = filteredUsers.filter(x => {
        if (x.admin && filterAdminStatus === 'admin') {
          return true;
        }
        if (!x.admin && filterAdminStatus === 'nonAdmin') {
          return true;
        }
        return false;
      });
    }
    if (filterEmailVerified && filterEmailVerified !== 'all') {
      filteredUsers = filteredUsers.filter(x => {
        if (x.emailVerified && filterEmailVerified === 'verified') {
          return true;
        }
        if (!x.emailVerified && filterEmailVerified === 'notVerified') {
          return true;
        }
        return false;
      });
    }
    if (filterName) {
      filteredUsers = filteredUsers.filter(x => x.name.includes(filterName));
    }
  }

  const showUsers = !!filteredUsers && !!filteredUsers.length && !!filteredUsers.map;

  const newUserForm = <Section name="Coming soon" />;
  const listView = (
    <div>
      <Card
        highlighted={highlightId === 'new'}
        href="/admin/users?highlight=new"
        className={getClassName('admin-users__card')}>
        <SubSection name="New +" anchor={false} noPadding />
      </Card>
      {showUsers &&
        filteredUsers.map(n => (
          <AdminUsersAPIEntity
            key={n.id}
            href={`/admin/users?highlight=${n.id}`}
            compact
            entity={n}
            highlighted={highlightId === n.id}
            className={getClassName('admin-users__card')}
          />
        ))}
    </div>
  );
  let detailView = null;
  if (highlightId === 'new') {
    detailView = newUserForm;
  } else {
    const detailUsers = users && users.filter && highlightId ? users.filter(g => g.id === highlightId) : null;
    const detailUser = detailUsers && detailUsers.length > 0 ? detailUsers[0] : null;

    detailView = !detailUser ? null : (
      <AdminUsersAPIEntity
        entity={detailUser}
        highlighted={highlightId === detailUser.id}
        className={getClassName('pages__component')}
        onUserUpdateSuccess={() => {
          load();
        }}>
        <br />
        <br />
        <Button large disabled={removing} href={`/admin/users/${detailUser.id}`}>
          Edit user on dedicated page
        </Button>
        <br />
        <br />
        <Button
          large
          destructive
          disabled={requesting || removing}
          onClick={() => {
            requestMagicLink(detailUser);
          }}>
          Login as user
        </Button>
        <br />
        <br />
        <Button large destructive disabled={removing} onClick={() => remove(detailUser)}>
          Delete
        </Button>
      </AdminUsersAPIEntity>
    );
  }

  const mainControls = (
    <div>
      <Button
        style={{ marginRight: '1rem', marginBottom: '1rem' }}
        disabled={adminUsersState.loading}
        onClick={() => load()}
        large>
        Reload users
      </Button>
      <Button style={{ marginBottom: '1rem' }} onClick={() => setShowFilters(!showFilters)} large>
        {showFilters ? 'Hide filters' : 'Show filters'}
      </Button>
      <br />
      <br />
    </div>
  );

  const filterControls = (
    <div>
      <Checkbox
        label="Show deleted"
        name="filterDeleted"
        checked={!filterDeleted}
        onChange={event => {
          setFilterDeleted(!event.target.checked);
        }}
      />
      <br />
      <br />
      <label htmlFor="filterAdminStatus">Filter by admin status</label>
      <Select
        id="filterAdminStatus"
        name="Filter by admin status"
        value={filterAdminStatus}
        options={[
          { value: 'all', name: 'All' },
          { value: 'admin', name: 'Admin' },
          { value: 'nonAdmin', name: 'Non-admin' },
        ]}
        onChange={event => {
          setFilterAdminStatus(event.target.value);
        }}
      />
      <br />
      <br />
      <label htmlFor="filterEmailVerified">Filter by email verification status</label>
      <Select
        id="filterEmailVerified"
        name="Filter by email verification status"
        value={filterEmailVerified}
        options={[
          { value: 'all', name: 'All' },
          { value: 'verified', name: 'Verified' },
          { value: 'nonVerified', name: 'Non-verified' },
        ]}
        onChange={event => {
          setFilterEmailVerified(event.target.value);
        }}
      />
      <br />
      <br />
      <label htmlFor="filterName">Filter by name</label>
      <Input id="filterName" value={filterName} onChange={event => setFilterName(event.target.value)} />
    </div>
  );

  return (
    <>
      <LoadingCover
        loadingSkeleton={Skeleton}
        loading={authenticatorState.user === undefined}
        error={authenticatorState.loadAuthError}>
        <AdminOnly
          user={user}
          setLoginRedirect={() => {
            setPostLoginRedirect('admin/users');
          }}>
          <PageTitle link={{ to: '/admin', text: 'Admin' }} name="Admin users"></PageTitle>
          {mainControls}
          {showFilters && filterControls}
          {users && (
            <>
              <br />
              <Paragraph>
                Showing {filteredUsers.length} of {users.length} users
              </Paragraph>
              <br />
              <br />
            </>
          )}
          <SplitDetailView
            className={getClassName('admin-users__split-view')}
            listView={listView}
            detailView={detailView}
            closeLink="/admin/users"
          />
          {loadError && (
            <>
              <Paragraph>Could not load users</Paragraph>
              {loadError.errorMessage && (
                <>
                  <br />
                  <Paragraph>{loadError.errorMessage}</Paragraph>
                </>
              )}
            </>
          )}
        </AdminOnly>
      </LoadingCover>
      <DebugObject
        debugTitle="AdminUsers"
        debugObject={{
          load,
          remove,
          requestMagicLink,
          adminUsersState,
          authenticatorState,
        }}
      />
    </>
  );
};

AdminUsers.propTypes = {
  load: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  requestMagicLink: PropTypes.func.isRequired,
  adminUsersState: PropTypes.shape({
    loading: PropTypes.bool,
    loadError: PropTypes.object,
    users: PropTypes.arrayOf(PropTypes.object),
    removing: PropTypes.bool,
    requesting: PropTypes.bool,
  }).isRequired,
  authenticatorState: PropTypes.shape({
    user: PropTypes.object,
    loadAuthError: PropTypes.object,
  }).isRequired,
  router: PropTypes.shape({
    query: PropTypes.shape({
      highlight: PropTypes.string,
    }).isRequired,
  }),
};

AdminUsers.defaultProps = {
  adminUsersState: null,
  verificationState: null,
  router: null,
};

export default withRouter(AdminUsers);
