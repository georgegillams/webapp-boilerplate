import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'gg-components/Button';
import { Paragraph, SubSection } from 'gg-components/Typography';
import Card from 'components/Card';

const AdminUsersAPIEntity = props => {
  const { compact, entity, onUserUpdateSuccess, children, ...rest } = props;
  const [editing, setEditing] = useState(false);

  const content = (
    <SubSection anchor={false} name={entity.name || `User ${entity.id}`}>
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
      {!compact && children && children}
    </SubSection>
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
  children: PropTypes.node,
  compact: PropTypes.bool,
  onUserUpdateSuccess: PropTypes.func,
};

AdminUsersAPIEntity.defaultProps = {
  children: null,
  compact: false,
  onUserUpdateSuccess: null,
};

export default AdminUsersAPIEntity;
