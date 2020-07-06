import React from 'react';
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => <div style={{ width: '1rem', height: '1rem', background: 'red' }} />,
});
