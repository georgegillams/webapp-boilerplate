import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'gg-components/Checkbox';
import { Paragraph } from 'gg-components/Typography';
import PageTitle from 'components/PageTitle';
import STYLES from './debug.scss';
import { cssModules } from 'gg-components/helpers/cssModules';

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
        storageKey="showSessionDebugViews"
      />
      <br />
      <StatusControl
        className={getClassName('debug__checkbox')}
        name="Show page container debug colours"
        storageKey="showPageContainerDebugColor"
      />
      <br />
      <Paragraph>Note that changes will not take effect until you reload the page.</Paragraph>
    </PageTitle>
  </div>
);

export default Debug;
