import React from 'react';

const ConfigContext = React.createContext(
  { appConfig: { app: { style: {} } } } // default value
);

const ConfigProvider = props => {
  const { appConfig, ...rest } = props;
  return <ConfigContext.Provider value={{ appConfig: appConfig }} {...rest} />;
};

export default { ConfigContext, ConfigProvider };
export { ConfigContext, ConfigProvider };
