import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'gg-components/Button';
import { Paragraph, Subsection } from 'gg-components/Typography';
import Card from 'components/Card';
import { UserEditForm } from 'components/Forms';

const AdminUsersAPIEntity = props => {
  const { compact, entity, updateUser, adminUserState, children, ...rest } = props;
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(null);

  const content = (
    <Subsection anchor={false} name={entity.name || `User ${entity.id}`}>
      <Paragraph>id: {entity.id}</Paragraph>
      {!compact && (
        <>
          {entity.deleted && (
            <>
              <br />
              <Paragraph>DELETED</Paragraph>
            </>
          )}
          <br />
          <Paragraph>uname: {entity.uname}</Paragraph>
          <br />
          <Paragraph>email: {entity.email}</Paragraph>
          <br />
          <Paragraph>{entity.admin ? 'Admin' : 'Regular user'}</Paragraph>
          <br />
          <Paragraph>Email{entity.emailVerified ? '' : ' not'} verified</Paragraph>
        </>
      )}
      {!compact && (
        <>
          <br />
          <br />
          <Button
            large
            onClick={() => {
              setEditing(!editing);
            }}>
            {editing ? 'Cancel edit' : 'Edit user'}
          </Button>
        </>
      )}
      {editing && (
        <>
          <br />
          <br />
          <UserEditForm
            showAdminControls
            user={updatedUser || entity}
            onDataChanged={setUpdatedUser}
            onSubmit={() => {
              if (updateUser) {
                updateUser({
                  userToUpdate: updatedUser,
                  onUpdateSuccessCb: () => {
                    setEditing(false);
                  },
                });
              }
            }}
            disabled={adminUserState.updating}
          />
        </>
      )}
      {!compact && adminUserState && adminUserState.updateError && (
        <>
          <br />
          <Paragraph>{adminUserState.updateError.errorMessage || 'Something went wrong'}</Paragraph>
        </>
      )}
      {!compact && children && children}
    </Subsection>
  );

  if (compact) {
    return (
      <Card id={entity.id} {...rest}>
        {content}
      </Card>
    );
  }
  return (
    <div id={entity.id} {...rest}>
      {content}
    </div>
  );
};

AdminUsersAPIEntity.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  entity: PropTypes.object.isRequired,
  updateUser: PropTypes.func,
  children: PropTypes.node,
  compact: PropTypes.bool,
  adminUserState: PropTypes.object,
};

AdminUsersAPIEntity.defaultProps = {
  updateUser: null,
  children: null,
  compact: false,
  adminUserState: null,
};

export default AdminUsersAPIEntity;
