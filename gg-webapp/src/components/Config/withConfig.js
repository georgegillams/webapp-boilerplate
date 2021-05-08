import React, { useContext } from 'react';

import { ConfigContext } from './configContext';

const withConfig = (Component) => {
  const ConfiguredComponent = (props) => {
    const { appConfig } = useContext(ConfigContext);
    return <Component appConfig={appConfig} {...props} />;
  };

  return ConfiguredComponent;
};

export default { withConfig };
export { withConfig };
