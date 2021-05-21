import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@george-gillams/components/Checkbox';
import { Paragraph } from '@george-gillams/components/Paragraph';
import PageTitle from '@george-gillams/webapp/components/PageTitle';
import STYLES from './debug.scss';
import { cssModules } from '@george-gillams/components/helpers/cssModules';
import {
  DEBUG_SHOW_PAGE_CONTAINER_KEY,
  DEBUG_SHOW_DEBUG_INFORMATION_KEY,
} from '@george-gillams/webapp/helpers/storageConstants';

const getClassName = cssModules(STYLES);

const StatusControl = props => {
  const { name, storageKey, ...rest } = props;
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const debugEnabled = window.localStorage.getItem(storageKey) === 'true';
    setIsEnabled(debugEnabled);
  }, []);

  const onValueChanged = newValue => {
    setIsEnabled(newValue);
    window.localStorage.setItem(storageKey, newValue ? 'true' : 'false');
  };

  return (
    <Checkbox
      name={name}
      label={name}
      checked={isEnabled}
      onChange={event => {
        onValueChanged(event.target.checked);
      }}
      {...rest}
    />
  );
};

StatusControl.propTypes = {
  name: PropTypes.string.isRequired,
  storageKey: PropTypes.string.isRequired,
};

const Debug = props => (
  <div {...props}>
    <PageTitle anchor={false} name="Debug">
      <StatusControl
        className={getClassName('debug__checkbox')}
        name="Show session debug views"
        storageKey={DEBUG_SHOW_DEBUG_INFORMATION_KEY}
      />
      <StatusControl
        className={getClassName('debug__checkbox')}
        name="Show page container debug colours"
        storageKey={DEBUG_SHOW_PAGE_CONTAINER_KEY}
      />
      <Paragraph>Note that changes will not take effect until you reload the page.</Paragraph>
    </PageTitle>
  </div>
);

export default Debug;
